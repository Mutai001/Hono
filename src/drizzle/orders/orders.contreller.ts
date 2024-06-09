import { Context } from "hono";
import { CreateOrder, DeleteOrder, fetchOneOrders, getAllOrders, UpdateOrders } from "./orders.service";

//fetch all orders
export const getAllOrdersData = async (c: Context) => {
    const orders= await getAllOrders()
    if(orders === null){
        return c.json({message: "No orders found"})
    }
    return c.json(orders,200)
}

// fetch one orders
export const getOneOrdersData = async (c: Context) => {
    const id = c.req.param("id")
    const orders = await fetchOneOrders(parseInt(id))
    if(orders === undefined){
        return c.json({message: "No orders found"},404)
    }
    return c.json(orders,200)
}

//create orders
export const createOrdersData = async (c: Context, next: Function) => {
    
    try{
       const orders = await c.req.json()
    const response = await CreateOrder(orders)
    return c.json({message: response},201)
    } catch(err){
        return c.json({message: err},500)
    }
}

//update orders
export const updateOrdersData = async (c: Context) => {
   
}

//delete orders
export const deleteOrdersData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteOrder(parseInt(id))
    return c.json({message: response},200)

}