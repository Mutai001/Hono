import { Hono } from 'hono';
import { register } from 'module';
import { registerUserSchema } from '../validators';
import { zValidator } from '@hono/zod-validator'
import { loginUserData } from "./auth.controller";


export const authRouter = new Hono();

authRouter.post("/login", loginUserData);



// export const authRouter = new Hono();
//  authRouter.post('/register', zValidator('json', registerUserSchema, (result, c)=>{
// if (!result.success){
//     return c.json (result, 400)
// }
//  }), registerUser)



 //  authRouter.post('/log in', zValidator('json', loginUserSchema, (result, c)=>{
//     if (!result.success){
//         return c.json (result, 400)
//     }
//      }), loginUser)