import { Context } from "hono";
import { CreateRestautantOwner, DeleteRestautantOwner, fetchOneRestautantOwners, getAllRestautantOwners, UpdateRestautantOwner } from "./restaurant_owner.service";

//fetch all RestautantOwners
export const getAllRestautantOwnersData = async (c: Context) => {
       try {
        //limit the number of RestuarantOwners to be returned

        const limit = Number(c.req.query('limit'))

        const data = await getAllRestautantOwners(limit);
        if (data == null || data.length == 0) {
            return c.text("RestuarantOwner not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
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
     const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);
    const RestuarantOwner = await c.req.json();
    try {
        // search for the RestuarantOwner
        const searchedRestuarantOwner = await getAllRestautantOwners(id);
        if (searchedRestuarantOwner == undefined) return c.text("RestuarantOwner not found", 404);
        // get the data and update it
        const res = await UpdateRestautantOwner(id, RestuarantOwner);
        // return a success message
        if (!res) return c.text("RestuarantOwner not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

//delete restaurant_owners
export const deleteRestautantOwnersData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteRestautantOwner(parseInt(id))
    return c.json({message: response},200)

}