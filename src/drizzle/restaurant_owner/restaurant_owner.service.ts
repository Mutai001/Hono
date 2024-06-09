//Fetch all RestautantOwner

import { eq } from "drizzle-orm"
import db from "../db"
import { restaurantselect, restaurantOwnerTable, restaurantOwnerinsert, restaurantOwnerselect } from '../schema';

export const getAllRestautantOwners = async (): Promise<restaurantOwnerselect[] | null> => {
    return await db.query.restaurantOwnerTable.findMany()

}

// fetch one RestautantOwner
export const fetchOneRestautantOwners = async (id: number): Promise<restaurantOwnerselect | undefined> => {
return await db.query.restaurantOwnerTable.findFirst({
    where: eq(restaurantOwnerTable.id, id)
})
}

// create RestautantOwner
export const CreateRestautantOwner = async (restaurant_owner: restaurantOwnerinsert) => {
    await db.insert(restaurantOwnerTable).values(restaurant_owner)
    return "Restaurant_owner created successfully"
}

// update RestautantOwner
export const UpdateRestautantOwner = async () => {
 
}

// delete RestautantOwner
export const DeleteRestautantOwner = async (id: number) => {
    await db.delete(restaurantOwnerTable).where(eq(restaurantOwnerTable.id, id))
    return "RestautantOwner deleted successfully"
}