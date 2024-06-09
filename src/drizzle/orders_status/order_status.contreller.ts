import { Context } from "hono";
import { CreateOrdersStatus, DeleteOrderStatus, fetchOneOrderStatus, getAllOrderStatus, UpdateOrdersStatus } from "./order_status.service";

//fetch all OrderStatus
export const getAllOrderStatusData = async (c: Context) => {
    const OrderStatus= await getAllOrderStatus()
    if(OrderStatus === null){
        return c.json({message: "No OrderStatus found"})
    }
    return c.json(OrderStatus,200)
}

// fetch one OrderStatus
export const getOneOrderStatusData = async (c: Context) => {
    const id = c.req.param("id")
    const OrderStatus = await fetchOneOrderStatus(parseInt(id))
    if(OrderStatus === undefined){
        return c.json({message: "No OrderStatus found"},404)
    }
    return c.json(OrderStatus,200)
}

//create OrderStatus
export const createOrderstatusData = async (c: Context, next: Function) => {
    
    try{
       const OrderStatus = await c.req.json()
    const response = await CreateOrdersStatus(OrderStatus)
    return c.json({message: response},201)
    } catch(err){
        return c.json({message: err},500)
    }
}

//update OrderStatus
export const updateOrderStatusData = async (c: Context) => {
   
}

//delete OrderStatus
export const deleteOrderStatusData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteOrderStatus(parseInt(id))
    return c.json({message: response},200)

}