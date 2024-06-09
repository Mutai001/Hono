//Fetch all restaurant

import { eq } from "drizzle-orm"
import db from "../db"
import { restaurantinsert, restaurantTable, restaurantselect } from '../schema';

export const getAllRestaurants = async (): Promise<restaurantselect[] | null> => {
    return await db.query.restaurantTable.findMany()

}

// fetch one restaurant
export const fetchOneRestaurant = async (id: number): Promise<restaurantselect | undefined> => {
return await db.query.restaurantTable.findFirst({
    where: eq(restaurantTable.id, id)
})
}

// create restaurant
export const CreateRestaurant = async (restaurant: restaurantinsert) => {
    await db.insert(restaurantTable).values(restaurant)
    return "restaurant created successfully"
}

// update restaurant
export const UpdateRestaurant = async () => {
 
}

// delete restaurant
export const DeleteRestaurant = async (id: number) => {
    await db.delete(restaurantTable).where(eq(restaurantTable.id, id))
    return "restaurant deleted successfully"
}