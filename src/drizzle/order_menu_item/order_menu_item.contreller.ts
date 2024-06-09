import { Context } from "hono";
import { CreateOrderMenuItem, DeleteOrderMenuItem, fetchOneOrderMenuItem, getAllOrderMenuItem, UpdateOrderMenuItem } from "./order_menu_item.service";

//fetch all OrderMenuItem
export const getAllOrderMenuItemData = async (c: Context) => {
    const OrderMenuItem= await getAllOrderMenuItem()
    if(OrderMenuItem === null){
        return c.json({message: "No OrderMenuItem found"})
    }
    return c.json(OrderMenuItem,200)
}

// fetch one OrderMenuItem
export const getOneOrderMenuItemsData = async (c: Context) => {
    const id = c.req.param("id")
    const OrderMenuItem = await fetchOneOrderMenuItem(parseInt(id))
    if(OrderMenuItem === undefined){
        return c.json({message: "No OrderMenuItem found"},404)
    }
    return c.json(OrderMenuItem,200)
}

//create OrderMenuItem
export const createOrderMenuItemData = async (c: Context, next: Function) => {
    
    try{
       const OrderMenuItem = await c.req.json()
    const response = await CreateOrderMenuItem(OrderMenuItem)
    return c.json({message: response},201)
    } catch(err){
        return c.json({message: err},500)
    }
}

//update OrderMenuItem
export const updateOrderMenuItemData = async (c: Context) => {
   
}

//delete OrderMenuItem
export const deleteOrderMenuItemData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteOrderMenuItem(parseInt(id))
    return c.json({message: response},200)

}