import { Context } from "hono";
import { CreateStatusCatalog, DeleteStatusCatalog, fetchOneStatusCatalog, getAllStatusCatalog, UpdateStatusCatalog } from "./status_catalog.service";

//fetch all status_catalog
export const getAllstatusCatalogsData = async (c: Context) => {
    const status_catalog= await getAllStatusCatalog()
    if(status_catalog === null){
        return c.json({message: "No status_catalog found"})
    }
    return c.json(status_catalog,200)
}

// fetch one status_catalog
export const getOnestatusCatalogData = async (c: Context) => {
    const id = c.req.param("id")
    const status_catalog = await fetchOneStatusCatalog(parseInt(id))
    if(status_catalog === undefined){
        return c.json({message: "No status_catalog found"},404)
    }
    return c.json(status_catalog,200)
}

//create status_catalog
export const createstatusCatalogData = async (c: Context, next: Function) => {
    
    try{
       const status_catalog = await c.req.json()
    const response = await CreateStatusCatalog(status_catalog)
    return c.json({message: response},201)
    } catch(err){
        return c.json({message: err},500)
    }
}

//update status_catalog
export const updatestatusCatalogData = async (c: Context) => {
   
}

//delete status_catalog
export const deletestatusCatalogData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteStatusCatalog(parseInt(id))
    return c.json({message: response},200)

}