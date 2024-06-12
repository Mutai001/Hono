import { Context } from "hono";
import { CreateStatusCatalog, DeleteStatusCatalog, fetchOneStatusCatalog, getAllStatusCatalog, UpdateStatusCatalog } from "./status_catalog.service";

//fetch all status_catalog
export const getAllstatusCatalogsData = async (c: Context) => {
     try {
        //limit the number of StatusCatalogs to be returned

        const limit = Number(c.req.query('limit'))

        const data = await getAllStatusCatalog(limit);
        if (data == null || data.length == 0) {
            return c.text("No status_catalog found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
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
       const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const StatusCatalog = await c.req.json();
    try {
        // search for the StatusCatalog
        const searchedStatusCatalog = await getAllStatusCatalog(id);
        if (searchedStatusCatalog == undefined) return c.text("StatusCatalog not found", 404);
        // get the data and update it
        const res = await UpdateStatusCatalog(id, StatusCatalog);
        // return a success message
        if (!res) return c.text("StatusCatalog not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

//delete status_catalog
export const deletestatusCatalogData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteStatusCatalog(parseInt(id))
    return c.json({message: response},200)

}