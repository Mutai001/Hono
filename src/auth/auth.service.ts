import db from "../drizzle/db";
import { UserSelect, usersTable, UserInsert } from '../drizzle/schema';
import { eq } from "drizzle-orm";



// register user
export const createAuthUserService = async (user: UserInsert): Promise<string | null> => {
    await db.insert(usersTable).values(user)
    return "User created successfully";
}

// log in user
export const loginUser = async (user: any) => {
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


