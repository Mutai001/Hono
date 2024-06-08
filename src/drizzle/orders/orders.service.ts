//Fetch all user

import { eq } from "drizzle-orm"
import db from "../db"
import { UserSelect, usersTable, UserInsert } from '../schema';

export const getAllUsers = async (): Promise<UserSelect[] | null> => {
    return await db.query.usersTable.findMany()

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

// update user
export const UpdateUser = async () => {
 
}

// delete user
export const DeleteUser = async (id: number) => {
    await db.delete(usersTable).where(eq(usersTable.id, id))
    return "User deleted successfully"
}