import { Context } from "hono";
import { CreateOrder, DeleteOrder, fetchOneOrders, getAllOrders, UpdateOrders } from "./orders.service";

//fetch all orders
export const getAllOrdersData = async (c: Context) => {
     try {
        //limit the number of OrderMenuItems to be returned

        const limit = Number(c.req.query('limit'))

        const data = await getAllOrders(limit);
        if (data == null || data.length == 0) {
            return c.text("OrderMenuItem not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
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
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const Order = await c.req.json();
    try {
        // search for the Order
        const searchedOrder = await getAllOrders(id);
        if (searchedOrder == undefined) return c.text("Order not found", 404);
        // get the data and update it
        const res = await UpdateOrders(id, Order);
        // return a success message
        if (!res) return c.text("Order not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}


//delete orders
export const deleteOrdersData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteOrder(parseInt(id))
    return c.json({message: response},200)

}