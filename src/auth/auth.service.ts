import db from "../drizzle/db";
import { UserSelect, usersTable, UserInsert } from '../drizzle/schema';
import { eq } from "drizzle-orm";

// log in user
export const loginUser = async (user: any) => {
//    const { email, password } = user; 
console.log(user)
    return await db.query.usersTable.findFirst({
        columns:{
            name: true,
            contact_phone: true,
            email: true,
            password: true
        },where: eq(usersTable.email, user.email)
    })
}


// export const userLoginService = async (user: AuthOneUserInsert) => {
//     const { username, password } = user;
//     return await db.query.AuthOneUsersTable.findFirst({
//         columns: {
//             username: true,
//             role: true,
//             password: true
//         }, where: sql` ${AuthOneUsersTable.username} = ${username}`,
//         with: {
//             user: {
//                 columns: {
//                     fullname: true,
//                     phone: true,
//                     address: true,
//                     id: true
//                 }
//             }
//         }
//     })
// }