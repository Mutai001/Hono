//Fetch all city

import { eq } from "drizzle-orm"
import db from "../db"
import { cityselect, cityTable,cityinsert } from '../schema';

export const getAllCity = async (): Promise<cityselect[] | null> => {
    return await db.query.cityTable.findMany()

}

// fetch one city
export const fetchOneCity = async (id: number): Promise<cityselect | undefined> => {
return await db.query.cityTable.findFirst({
    where: eq(cityTable.id, id)
})
}

// create city
export const CreateCity = async (city: cityinsert) => {
    await db.insert(cityTable).values(city)
    return "city created successfully"
}

// update city
export const UpdateCity = async (id:number,city:cityinsert) => {
    await db.update(cityTable).set(city).where(eq(cityTable.id,id));
    return "Address updated successfully"

}

// delete city
export const DeleteCity = async (id: number) => {
    await db.delete(cityTable).where(eq(cityTable.id, id))
    return "city deleted successfully"
}