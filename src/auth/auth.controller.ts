import dotenv from 'dotenv';
import { Context } from 'hono';
import * as bcrypt from 'bcrypt';
import {  loginUserService, createAuthUserService } from "./auth.service";
import exp from 'constants';
import { sign } from 'hono/jwt';




//register user

export const registerUser = async (c: Context) => {
    try {
        const user = await c.req.json();
        const pass = user.password;
        const hashedPassword = await bcrypt.hash(pass, 10);
        user.password = hashedPassword;
        const createdUser = await createAuthUserService(user);
        if (!createdUser) return c.text("User not created", 404);
        return c.json({ msg: createdUser }, 201);

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }

}


//log-in user
export const loginUserData = async (c: Context) => {

try{
           const details = await c.req.json()
    const user = await loginUserService(details)
    if(user === null){
        return c.json({message: "No user found"},404)
    }
    const userMatch = await bcrypt.compare(details.password, user?.password !)
    console.log(user?.password, details.password, userMatch)
    if(userMatch){
        return c.json(user,200)
    }else {
        const payload = {
            sub: user?.username,
            role: user?.role,
            exp: Math.floor(Date.now() / 1000) +(60 * 180)
        };
        const secret = process.env.JWT_SECRET!;
        const token = await sign(payload, secret);
        const UserDetails = user?.username;
        const userRole = user?.role;
        return c.json({token, user:{userRole, ...details} },200)
}
        // return c.json({message: "Invalid details"},401)
    }
    catch(error: any){
        return c.json({error: error?.message},400)
    }
}





























// export const loginUserData = async (c: Context) => {

//     try {
//         const user = await c.req.json();
//         //check user exist
//         const userExist = await loginUserService(user);
//         if (userExist === null) return c.json({ error: "User not found" }, 404);  // not found         
//         const userMatch = await bycrpt.compare(user.password, userExist?.password as string);
//         if (!userMatch) {
//             return c.json({ error: "Invalid credentials" }, 401);  // unauthorized
//         } else {
//             // create a payload
//             const payload = {
//                 sub: userExist?.username,
//                 role: userExist?.role,
//                 exp: Math.floor(Date.now() / 1000) + (60 * 180)  // 3 hour  => SESSION EXPIRATION
//             }
//             let secret = process.env.JWT_SECRET as string;  // secret key
//             const token = await sign(payload, secret);   // create a JWT token
//             let user = userExist?.user;
//             let role = userExist?.role;
//             return c.json({ token, user: { role, ...user } }, 200);  // return token and user details
//         }
//     } catch (error: any) {
//         return c.json({ error: error?.message }, 400)
//     }

// }




