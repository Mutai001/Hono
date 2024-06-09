import { Context } from "hono";
import { CreateRestaurant, DeleteRestaurant, fetchOneRestaurant,  getAllRestaurants, UpdateRestaurant } from "./restaurant.service";

//fetch all restaurant
export const getAllRestaurantsData = async (c: Context) => {
    const restaurants = await getAllRestaurants()
    if(restaurants === null){
        return c.json({message: "No restaurants found"})
    }
    return c.json(restaurants,200)
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
   
}

//delete restaurant
export const deleteRestaurantData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteRestaurant(parseInt(id))
    return c.json({message: response},200)

}