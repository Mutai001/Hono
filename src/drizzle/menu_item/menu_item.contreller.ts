import { Context } from "hono";
import { CreateMenuItem, DeleteMenuItem, fetchOneMenuItem, getAllMenuItem, UpdateMenuItem} from "./menu_item.service";

//fetch all a
export const getAllMenuItemData = async (c: Context) => {
    const menuItem = await getAllMenuItem()
    if(menuItem === null){
        return c.json({message: "No menuItem found"})
    }
    return c.json(menuItem,200)
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
    } catch(err){
        return c.json({message: err},500)
    }
}

//update menuItem
export const updateMenuItemData = async (c: Context) => {
   
}

//delete menuItem
export const deleteMenuItemData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteMenuItem(parseInt(id))
    return c.json({message: response},200)

}