import { Context } from "hono";
import { CreateMenuItem, DeleteMenuItem, fetchOneMenuItem, getAllMenuItem, UpdateMenuItem } from './menu_item.service';
import { any } from "zod";

//fetch all a
export const getAllMenuItemData = async (c: Context) => {
 try {
        //limit the number of menuItem to be returned

        const limit = Number(c.req.query('limit'))

        const data = await getAllMenuItem(limit);
        if (data == null || data.length == 0) {
            return c.text("Menu not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}




// fetch one menuItem
export const getOneMenuItemData = async (c: Context) => {
    const id = c.req.param("id")
    const menuItem = await fetchOneMenuItem(parseInt(id))
    if(menuItem === undefined){
        return c.json({message: "No menuItem found"},404)
    }
    return c.json(menuItem,200)
}

//create menuItem
export const createMenuItemData = async (c: Context, next: Function) => {
    
    try{
       const menuItem = await c.req.json()
    const response = await CreateMenuItem(menuItem)
    return c.json({message: response},201)
    } catch(err:any){
        return c.json({message: err?.message},500)
    }
}

//update menuItem
export const updateMenuItemData = async (c: Context) => {
    try {
        const id = parseInt(c.req.param('id'), 10);
        if (isNaN(id)) return c.text('Invalid id', 400);
        const menuItem = await c.req.json();
        const MenuItem = await UpdateMenuItem(id, menuItem);
        if (!UpdateMenuItem) return c.text('Menu_item not updated', 400);
        return c.json({ msg: UpdateMenuItem }, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400);
    }
}

//delete menuItem
export const deleteMenuItemData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteMenuItem(parseInt(id))
    return c.json({message: response},200)

}