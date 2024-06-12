import { eq } from "drizzle-orm"
import db from "../db"
import { ordersStatusselect, ordersStatusTable, ordersStatusinsert } from '../schema';


//Fetch all OrderStatus
export const getAllOrderStatus = async (limit?: number): Promise<ordersStatusselect[] | null> => {
    if (limit) {
        return await db.query.ordersStatusTable.findMany({
            limit: limit
        });
    }
    return await db.query.ordersStatusTable.findMany();
}

// fetch one ordersStatus
export const fetchOneOrderStatus = async (id: number): Promise<ordersStatusselect | undefined> => {
return await db.query.ordersStatusTable.findFirst({
    where: eq(ordersStatusTable.id, id)
})
}

// create ordersStatus
export const CreateOrdersStatus = async (ordersStatus: ordersStatusinsert) => {
    await db.insert(ordersStatusTable).values(ordersStatus)
    return "ordersStatus created successfully"
}

// update ordersStatus
 export const UpdateOrdersStatus = async (id: number, OrderStatus: ordersStatusinsert) => {
    await db.update(ordersStatusTable).set(OrderStatus).where(eq(ordersStatusTable.id, id))
    return "OrderStatus updated successfully";
}

// delete ordersStatus
export const DeleteOrderStatus = async (id: number) => {
    await db.delete(ordersStatusTable).where(eq(ordersStatusTable.id, id))
    return "ordersStatus deleted successfully"
}