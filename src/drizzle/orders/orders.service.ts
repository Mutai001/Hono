//Fetch all Orders

import { eq } from "drizzle-orm"
import db from "../db"
import { ordersselect, ordersTable, ordersinsert } from '../schema';

export const getAllOrders = async (): Promise<ordersselect[] | null> => {
    return await db.query.ordersTable.findMany()

}

// fetch one orders
export const fetchOneOrders = async (id: number): Promise<ordersselect | undefined> => {
return await db.query.ordersTable.findFirst({
    where: eq(ordersTable.id, id)
})
}

// create Orders
export const CreateOrder = async (Orders: ordersinsert) => {
    await db.insert(ordersTable).values(Orders)
    return "Order created successfully"
}

// update Order
export const UpdateOrders = async () => {
 
}

// delete Order
export const DeleteOrder = async (id: number) => {
    await db.delete(ordersTable).where(eq(ordersTable.id, id))
    return "Orders deleted successfully"
}