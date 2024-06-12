//Fetch all statusCatalogTable

import { eq } from "drizzle-orm"
import db from "../db"
import { statusCatalogselect, statusCatalogTable, statusCataloginsert } from '../schema';


export const getAllStatusCatalog = async (limit?: number): Promise<statusCatalogselect[] | null> => {
    if (limit) {
        return await db.query.statusCatalogTable.findMany({
            limit: limit
        });
    }
    return await db.query.statusCatalogTable.findMany();
}


// fetch one StatusCatalog
export const fetchOneStatusCatalog = async (id: number): Promise<statusCatalogselect | undefined> => {
return await db.query.statusCatalogTable.findFirst({
    where: eq(statusCatalogTable.id, id)
})
}

// create StatusCatalog
export const CreateStatusCatalog = async (status_catalog: statusCataloginsert) => {
    await db.insert(statusCatalogTable).values(status_catalog)
    return "status_catalog created successfully"
}

// update status_catalog
export const UpdateStatusCatalog = async (id: number, StatusCatalog: statusCataloginsert) => {
    await db.update(statusCatalogTable).set(StatusCatalog).where(eq(statusCatalogTable.id, id))
    return "StatusCatalog updated successfully";
}

// delete status_catalog
export const DeleteStatusCatalog = async (id: number) => {
    await db.delete(statusCatalogTable).where(eq(statusCatalogTable.id, id))
    return "status_catalog deleted successfully"
}