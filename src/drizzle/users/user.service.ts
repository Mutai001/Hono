import { eq } from "drizzle-orm"
import db from "../db"
import { UserSelect, usersTable, UserInsert } from '../schema';



//Fetch all user
export const getAllUsers = async (limit?: number): Promise<UserSelect[] | null> => {
    if (limit) {
        return await db.query.usersTable.findMany({
            limit: limit
        });
    }
    return await db.query.usersTable.findMany();
}

// fetch one user
export const fetchOneUsers = async (id: number): Promise<UserSelect | undefined> => {
return await db.query.usersTable.findFirst({
    where: eq(usersTable.id, id)
})
}

// create user
export const CreateUser = async (user: UserInsert) => {
    await db.insert(usersTable).values(user)
    return "User created successfully"
}
// log in user
// export const loginUser = async (user: any) => {
// //    const { email, password } = user; 
// console.log(user)
//     return await db.query.usersTable.findFirst({
//         columns:{
//             name: true,
//             contact_phone: true,
//             email: true,
//             password: true
//         },where: eq(usersTable.email, user.email)
//     })
// }
// update user
export const UpdateUser = async (id: number, Address: UserInsert) => {
    await db.update(usersTable).set(Address).where(eq(usersTable.id, id))
    return "Address updated successfully";
}
// delete user
export const DeleteUser = async (id: number) => {
    await db.delete(usersTable).where(eq(usersTable.id, id))
    return "User deleted successfully"
}