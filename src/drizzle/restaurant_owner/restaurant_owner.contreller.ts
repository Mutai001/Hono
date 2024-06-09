import { Context } from "hono";
import { CreateRestautantOwner, DeleteRestautantOwner, fetchOneRestautantOwners, getAllRestautantOwners, UpdateRestautantOwner } from "./restaurant_owner.service";

//fetch all RestautantOwners
export const getAllRestautantOwnersData = async (c: Context) => {
    const restaurant_owners= await getAllRestautantOwners()
    if(restaurant_owners === null){
        return c.json({message: "No restaurant_owners found"})
    }
    return c.json(restaurant_owners,200)
}

// fetch one restaurant_owners
export const getOneRestautantOwnersData = async (c: Context) => {
    const id = c.req.param("id")
    const restaurant_owners = await fetchOneRestautantOwners(parseInt(id))
    if(restaurant_owners === undefined){
        return c.json({message: "No restaurant_owners found"},404)
    }
    return c.json(restaurant_owners,200)
}

//create restaurant_owners
export const createRestautantOwnersData = async (c: Context, next: Function) => {
    
    try{
       const restaurant_owners = await c.req.json()
    const response = await CreateRestautantOwner(restaurant_owners)
    return c.json({message: response},201)
    } catch(err){
        return c.json({message: err},500)
    }
}

//update restaurant_owners
export const updateRestautantOwnersData = async (c: Context) => {
   
}

//delete restaurant_owners
export const deleteRestautantOwnersData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteRestautantOwner(parseInt(id))
    return c.json({message: response},200)

}