import { eq } from "drizzle-orm"
import db from "../db"
import { menuItemsselect,  menuItemsTable,  menuItemsinsert, orderMenuItemselect } from '../schema';

//Fetch all menuItem
export const getAllMenuItem = async (limit?: number): Promise<menuItemsselect[] | null> => {
    if (limit) {
        return await db.query.menuItemsTable.findMany({
            limit: limit
        });
    }
    return await db.query.menuItemsTable.findMany();
}

// fetch one menuItem
export const fetchOneMenuItem = async (id: number): Promise<menuItemsselect | undefined> => {
return await db.query.menuItemsTable.findFirst({
    where: eq(menuItemsTable.id, id)
})
}

// create menuItem
export const CreateMenuItem = async (menuItem: menuItemsinsert) => {
       try{
        await db.insert(menuItemsTable).values(menuItem)
        return "menuItem created successfully"
    }catch(err: any){
        return err?.message
    }
}

// update menuItem
export const UpdateMenuItem = async (id:number, menuItems:menuItemsinsert) => {
    await db.update(menuItemsTable).set(menuItems).where(eq(menuItemsTable.id,id));
    return "MenuItem updated successfully"

 }

// delete menuItem
export const DeleteMenuItem = async (id: number) => {
    await db.delete(menuItemsTable).where(eq(menuItemsTable.id, id))
    return "menuItem deleted successfully"
}