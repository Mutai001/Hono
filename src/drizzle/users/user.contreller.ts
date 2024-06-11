import { Context } from "hono";
import { CreateUser, DeleteUser, fetchOneUsers, getAllUsers, loginUser, UpdateUser } from "./user.service";
import * as bcrypt from 'bcrypt';


//fetch all users
export const getAllUsersData = async (c: Context) => {
    const users= await getAllUsers()
    if(users === null){
        return c.json({message: "No users found"})
    }
    return c.json(users,200)
}

// fetch one user
export const getOneUsersData = async (c: Context) => {
    const id = c.req.param("id")
    const user = await fetchOneUsers(parseInt(id))
    if(user === undefined){
        return c.json({message: "No user found"},404)
    }
    return c.json(user,200)
}

//create user
export const createUsersData = async (c: Context) => {
    
    try{
       const user = await c.req.json()
       const password = user.password
      const hashedPassword = await bcrypt.hash(password, 10)
        user.password = hashedPassword 
    const response = await CreateUser(user)
    return c.json({message: response},201)
    } catch(error: any){
        return c.json({message: error?.message},500)
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



//update user
export const UpdateUserData = async (c: Context) => {
    try {
        const id = parseInt(c.req.param('id'), 10);
        if (isNaN(id)) return c.text('Invalid id', 400);
        const city = await c.req.json();
        const City = await UpdateUser(id, city);

        if (!UpdateUser) return c.text('City not updated', 400);
        return c.json({ msg: UpdateUser }, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400);
    }
}

//delete user
export const deleteUsersData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteUser(parseInt(id))
    return c.json({message: response},200)

}