import {Hono} from 'hono'
import {userController,userDelete} from './user.contreller'

export const userRouter = new Hono();

userRouter.get('listuser', userController);
userRouter.delete("/user/:id",userDelete)

export default userRouter;


//add user.router.ts