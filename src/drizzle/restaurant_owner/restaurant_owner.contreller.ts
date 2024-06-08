import { Context } from "hono";
import { CreateUser, DeleteUser, fetchOneUsers, getAllUsers, UpdateUser } from "./user.service";

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
export const createUsersData = async (c: Context, next: Function) => {
    
    try{
       const user = await c.req.json()
    const response = await CreateUser(user)
    return c.json({message: response},201)
    } catch(err){
        return c.json({message: err},500)
    }
}

//update user
export const updateUsersData = async (c: Context) => {
   
}

//delete user
export const deleteUsersData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteUser(parseInt(id))
    return c.json({message: response},200)

}