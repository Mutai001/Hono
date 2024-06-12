import { eq } from "drizzle-orm"
import db from "../db"
import { ordersselect, ordersTable, ordersinsert } from '../schema';

//Fetch all Orders
export const getAllOrders = async (limit?: number): Promise<ordersselect[] | null> => {
    if (limit) {
        return await db.query.ordersTable.findMany({
            limit: limit
        });
    }
    return await db.query.ordersTable.findMany();

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
    export const UpdateOrders = async (id: number, Order: ordersinsert) => {
    await db.update(ordersTable).set(Order).where(eq(ordersTable.id, id))
    return "Order updated successfully";
}

 


// delete Order
export const DeleteOrder = async (id: number) => {
    await db.delete(ordersTable).where(eq(ordersTable.id, id))
    return "Orders deleted successfully"
}