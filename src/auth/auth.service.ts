import db from "../drizzle/db";
// import { UserSelect, usersTable, UserInsert, AuthOneUsersTable } from '../drizzle/schema';
import { AuthOneUserInsert ,AuthOneUserSelect,AuthOneUsersTable} from "../drizzle/schema";
import { eq } from "drizzle-orm";
import { sql } from "drizzle-orm";

// //create user
// export const createUserService = async (user: AuthOneUserInsert): Promise<string | null> => {
//     await db.insert(AuthOneUsersTable).values(user)
//     return "User created successfully";
// }


// register user
export const createAuthUserService = async (user: AuthOneUserInsert): Promise<string | null> => {
    await db.insert(AuthOneUsersTable).values(user)
    return "User created successfully";
}

// log in user
export const loginUserService = async (user: AuthOneUserSelect) => {
   const{username, password} = user;

    return await db.query.AuthOneUsersTable.findFirst({
        columns:{
            username: true,
            role: true,
            password: true
        },where: sql`${AuthOneUsersTable.username} = ${username}`,
        with: {
            user: {
                columns: {
                  id: true,
                  name: true,
                   contact_phone:true,
                     email:true,
                }
            }
        }
    })
}


