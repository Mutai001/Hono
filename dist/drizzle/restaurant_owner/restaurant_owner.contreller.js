"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestautantOwnersData = exports.updateRestautantOwnersData = exports.createRestautantOwnersData = exports.getOneRestautantOwnersData = exports.getAllRestautantOwnersData = void 0;
const restaurant_owner_service_1 = require("./restaurant_owner.service");
//fetch all RestautantOwners
const getAllRestautantOwnersData = async (c) => {
    try {
        //limit the number of RestuarantOwners to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, restaurant_owner_service_1.getAllRestautantOwners)(limit);
        if (data == null || data.length == 0) {
            return c.text("RestuarantOwner not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getAllRestautantOwnersData = getAllRestautantOwnersData;
// fetch one restaurant_owners
const getOneRestautantOwnersData = async (c) => {
    const id = c.req.param("id");
    const restaurant_owners = await (0, restaurant_owner_service_1.fetchOneRestautantOwners)(parseInt(id));
    if (restaurant_owners === undefined) {
        return c.json({ message: "No restaurant_owners found" }, 404);
    }
    return c.json(restaurant_owners, 200);
};
exports.getOneRestautantOwnersData = getOneRestautantOwnersData;
//create restaurant_owners
const createRestautantOwnersData = async (c, next) => {
    try {
        const restaurant_owners = await c.req.json();
        const response = await (0, restaurant_owner_service_1.CreateRestautantOwner)(restaurant_owners);
        return c.json({ message: response }, 201);
    }
    catch (err) {
        return c.json({ message: err }, 500);
    }
};
exports.createRestautantOwnersData = createRestautantOwnersData;
//update restaurant_owners
const updateRestautantOwnersData = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const RestuarantOwner = await c.req.json();
    try {
        // search for the RestuarantOwner
        const searchedRestuarantOwner = await (0, restaurant_owner_service_1.getAllRestautantOwners)(id);
        if (searchedRestuarantOwner == undefined)
            return c.text("RestuarantOwner not found", 404);
        // get the data and update it
        const res = await (0, restaurant_owner_service_1.UpdateRestautantOwner)(id, RestuarantOwner);
        // return a success message
        if (!res)
            return c.text("RestuarantOwner not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateRestautantOwnersData = updateRestautantOwnersData;
//delete restaurant_owners
const deleteRestautantOwnersData = async (c) => {
    const id = c.req.param("id");
    const response = await (0, restaurant_owner_service_1.DeleteRestautantOwner)(parseInt(id));
    return c.json({ message: response }, 200);
};
exports.deleteRestautantOwnersData = deleteRestautantOwnersData;
