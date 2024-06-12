//Fetch all driver

import { eq } from "drizzle-orm"
import db from "../db"
import { driversRelations, driversTable, driversinsert, driversselect } from '../schema';


export const getAllDrivers = async (limit?: number): Promise<driversselect[] | null> => {
    if (limit) {
        return await db.query.driversTable.findMany({
            limit: limit
        });
    }
    return await db.query.driversTable.findMany();

}

// fetch one drivers
export const fetchOneDriver = async (id: number): Promise<driversselect | undefined> => {
return await db.query.driversTable.findFirst({
    where: eq(driversTable.id, id)
})
}

// create driver
export const CreateDriver = async (driver: driversinsert) => {
    await db.insert(driversTable).values(driver)
    return "driver created successfully"
}

// update driver
export const UpdateDriver = async (id:number,comments:driversinsert) => {
    await db.update(driversTable).set(comments).where(eq(driversTable.id,id));
    return "Address updated successfully"

}

// delete driver
export const DeleteDriver = async (id: number) => {
    await db.delete(driversTable).where(eq(driversTable.id, id))
    return "driver deleted successfully"
}