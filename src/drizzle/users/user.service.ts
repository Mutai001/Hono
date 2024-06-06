import { eq } from "drizzle-orm";
import db from  "../db"
import { UserSelect, UserInsert, usersTable } from '../schema';
// import { getUser } from '..user.controller';


export const userService = async (): Promise<UserSelect[]> => {
    try {
        const users = await db.query.usersTable.findMany();
        console.log('Users fetched:', users);
        return users;
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        throw error;
    }
}


export const getOneUser= async (id: number): Promise<UserSelect | undefined> => {
    try {
        const user = await db.query.usersTable.findFirst({
            where:  eq(usersTable.id,id)
            
        });
        return user;
        
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}


export const deletOneUser= async (id: number): Promise<void> => {
    try {
        await db.delete.(usersTable).where(eq(usersTable.id,id));
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}