"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletestatusCatalogData = exports.updatestatusCatalogData = exports.createstatusCatalogData = exports.getOnestatusCatalogData = exports.getAllstatusCatalogsData = void 0;
const status_catalog_service_1 = require("./status_catalog.service");
//fetch all status_catalog
const getAllstatusCatalogsData = async (c) => {
    try {
        //limit the number of StatusCatalogs to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, status_catalog_service_1.getAllStatusCatalog)(limit);
        if (data == null || data.length == 0) {
            return c.text("No status_catalog found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getAllstatusCatalogsData = getAllstatusCatalogsData;
// fetch one status_catalog
const getOnestatusCatalogData = async (c) => {
    const id = c.req.param("id");
    const status_catalog = await (0, status_catalog_service_1.fetchOneStatusCatalog)(parseInt(id));
    if (status_catalog === undefined) {
        return c.json({ message: "No status_catalog found" }, 404);
    }
    return c.json(status_catalog, 200);
};
exports.getOnestatusCatalogData = getOnestatusCatalogData;
//create status_catalog
const createstatusCatalogData = async (c, next) => {
    try {
        const status_catalog = await c.req.json();
        const response = await (0, status_catalog_service_1.CreateStatusCatalog)(status_catalog);
        return c.json({ message: response }, 201);
    }
    catch (err) {
        return c.json({ message: err }, 500);
    }
};
exports.createstatusCatalogData = createstatusCatalogData;
//update status_catalog
const updatestatusCatalogData = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const StatusCatalog = await c.req.json();
    try {
        // search for the StatusCatalog
        const searchedStatusCatalog = await (0, status_catalog_service_1.getAllStatusCatalog)(id);
        if (searchedStatusCatalog == undefined)
            return c.text("StatusCatalog not found", 404);
        // get the data and update it
        const res = await (0, status_catalog_service_1.UpdateStatusCatalog)(id, StatusCatalog);
        // return a success message
        if (!res)
            return c.text("StatusCatalog not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updatestatusCatalogData = updatestatusCatalogData;
//delete status_catalog
const deletestatusCatalogData = async (c) => {
    const id = c.req.param("id");
    const response = await (0, status_catalog_service_1.DeleteStatusCatalog)(parseInt(id));
    return c.json({ message: response }, 200);
};
exports.deletestatusCatalogData = deletestatusCatalogData;
