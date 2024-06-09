//Fetch all menuItem

import { eq } from "drizzle-orm"
import db from "../db"
import { menuItemsselect,  menuItemsTable,  menuItemsinsert, orderMenuItemselect } from '../schema';

export const getAllMenuItem = async (): Promise<menuItemsselect[] | null> => {
    return await db.query.menuItemsTable.findMany()

}

// fetch one menuItem
export const fetchOneMenuItem = async (id: number): Promise<menuItemsselect | undefined> => {
return await db.query.menuItemsTable.findFirst({
    where: eq(menuItemsTable.id, id)
})
}

// create menuItem
export const CreateMenuItem = async (menuItem: menuItemsinsert) => {
    await db.insert(menuItemsTable).values(menuItem)
    return "menuItem created successfully"
}

// update menuItem
export const UpdateMenuItem = async () => {
 
}

// delete menuItem
export const DeleteMenuItem = async (id: number) => {
    await db.delete(menuItemsTable).where(eq(menuItemsTable.id, id))
    return "menuItem deleted successfully"
}