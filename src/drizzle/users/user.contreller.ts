import { Context } from "hono";
import { userService,getOneUser,deletOneUser } from "./user.service";
import { get } from "http";

export const userController = async (c: Context) => {
    try{
        const users = await userService();
        return c.json(users);
    } catch (err: any) {
        console.error(err)
        return c.json({error: 'Internal Server Error'}, 501)
    }
    
}

export const userDelete = async (c: Context) => {
    try{
        let id=Number(c.req.param("id"))
        let user=getOneUser(id)
        if (user==undefined){
            return c.json({error: 'User not found'}, 404)
        }else{
            deletOneUser(id)
        }

        // return c.json({message: id}, 200)
    }catch(err: any){
        console.error(err)
        return c.json({error: 'Internal Server Error'}, 501)
    }
}