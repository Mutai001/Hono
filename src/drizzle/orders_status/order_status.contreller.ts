import { Context } from "hono";
import { CreateOrdersStatus, DeleteOrderStatus, fetchOneOrderStatus, getAllOrderStatus, UpdateOrdersStatus } from "./order_status.service";

//fetch all OrderStatus
export const getAllOrderStatusData = async (c: Context) => {
       try {
        //limit the number of OrderStatuss to be returned

        const limit = Number(c.req.query('limit'))

        const data = await getAllOrderStatus(limit);
        if (data == null || data.length == 0) {
            return c.text("OrderStatus not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
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
      const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const OrderStatus = await c.req.json();
    try {
        // search for the OrderStatus
        const searchedOrderStatus = await getAllOrderStatus(id);
        if (searchedOrderStatus == undefined) return c.text("OrderStatus not found", 404);
        // get the data and update it
        const res = await UpdateOrdersStatus(id, OrderStatus);
        // return a success message
        if (!res) return c.text("OrderStatus not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

//delete OrderStatus
export const deleteOrderStatusData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteOrderStatus(parseInt(id))
    return c.json({message: response},200)

}