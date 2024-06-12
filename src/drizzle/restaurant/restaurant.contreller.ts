import { Context } from "hono";
import { CreateRestaurant, DeleteRestaurant, fetchOneRestaurant,  getAllRestaurants, UpdateRestaurant } from "./restaurant.service";

//fetch all restaurant
export const getAllRestaurantsData = async (c: Context) => {
    try {
        //limit the number of Restaurants to be returned

        const limit = Number(c.req.query('limit'))

        const data = await getAllRestaurants(limit);
        if (data == null || data.length == 0) {
            return c.text("Restaurant not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// fetch one restaurants
export const getOneRestaurantsData = async (c: Context) => {
    const id = c.req.param("id")
    const restaurants  = await fetchOneRestaurant(parseInt(id))
    if(restaurants  === undefined){
        return c.json({message: "No restaurant found"},404)
    }
    return c.json(restaurants,200)
}

//create restaurants 
export const createRestaurantsData = async (c: Context, next: Function) => {
    
    try{
       const restaurants  = await c.req.json()
    const response = await CreateRestaurant(restaurants)
    return c.json({message: response},201)
    } catch(err){
        return c.json({message: err},500)
    }
}

//update restaurant
export const updateRestaurantsData = async (c: Context) => {
   try{
    const id = parseInt(c.req.param('id'),10);
    if(isNaN(id)) return c.text('Restaurant not updated',400);
    const restaurant = await c.req.json();
    const req = await UpdateRestaurant(id,restaurant);
    if (!UpdateRestaurant) return c.text('Restaurant not updated', 400);
    return c.json({ msg: UpdateRestaurant }, 200);
   }catch (error: any) {
    return c.json({ error: error?.message }, 400);
}
}

//delete restaurant
export const deleteRestaurantData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteRestaurant(parseInt(id))
    return c.json({message: response},200)

}