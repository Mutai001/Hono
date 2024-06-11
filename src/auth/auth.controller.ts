import dotenv from 'dotenv';
import { Context } from 'hono';
import * as bcrypt from 'bcrypt';
import {  loginUser, createAuthUserService } from "./auth.service";



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


// log-in user
export const loginUserData = async (c: Context) => {
       const details = await c.req.json()
       console.log(details)
    const user = await loginUser(details)
    if(user === null){
        return c.json({message: "No user found"},404)
    }
    const userMatch = await bcrypt.compare(details.password, user?.password !)
    console.log(user?.password, details.password, userMatch)
    if(userMatch){
        return c.json(user,200)
    }else {
        return c.json({message: "Invalid details"},401)
    }
}




