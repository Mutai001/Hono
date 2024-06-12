import { eq } from "drizzle-orm"
import db from "../db"
import {orderMenuItemselect, orderMenuItemTable, orderMenuIteminsert, menuItemsselect } from '../schema';

//Fetch limit OrderMenuItem
export const getAllOrderMenuItem = async (limit?: number): Promise<orderMenuItemselect[] | null> => {
    if (limit) {
        return await db.query.orderMenuItemTable.findMany({
            limit: limit
        });
    }
    return await db.query.orderMenuItemTable.findMany();
}

// fetch one OrderMenuItem
export const fetchOneOrderMenuItem = async (id: number): Promise<orderMenuItemselect | undefined> => {
return await db.query.orderMenuItemTable.findFirst({
    where: eq(orderMenuItemTable.id, id)
})
}

// create OrderMenuItem
export const CreateOrderMenuItem = async (OrderMenuItem: orderMenuIteminsert) => {
    await db.insert(orderMenuItemTable).values(OrderMenuItem)
    return "OrderMenuItem created successfully"
}

// update OrderMenuItem
export const updateOrderMenuItem = async (id:number, ordermenuItems:orderMenuIteminsert) => {
    await db.update(orderMenuItemTable).set(ordermenuItems).where(eq(orderMenuItemTable.id,id));
    return "MenuItem updated successfully"

 }

// delete OrderMenuItem
export const DeleteOrderMenuItem = async (id: number) => {
    await db.delete(orderMenuItemTable).where(eq(orderMenuItemTable.id, id))
    return "OrderMenuItem deleted successfully"
}