"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAddressData = exports.updateAddressData = exports.createAddressData = exports.fetchOneAddressData = exports.getAllAddressData = void 0;
const address_service_1 = require("./address.service");
//fetch all address
const getAllAddressData = async (c) => {
    try {
        //limit the number of Addresss to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, address_service_1.fetchAllAddress)(limit);
        if (data == null || data.length == 0) {
            return c.text("Address not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getAllAddressData = getAllAddressData;
// fetch one address
const fetchOneAddressData = async (c) => {
    const id = c.req.param("id");
    const address = await (0, address_service_1.fetchOneAddress)(parseInt(id));
    if (address === undefined) {
        return c.json({ message: "No address found" }, 404);
    }
    return c.json(address, 200);
};
exports.fetchOneAddressData = fetchOneAddressData;
//create address
const createAddressData = async (c, next) => {
    try {
        const id = parseInt(c.req.param('id'), 10);
        if (isNaN(id))
            return c.text('Invalid id', 400);
        const address = await c.req.json();
        const updatedAddress = await (0, address_service_1.updateAddress)(id, address);
        if (!updatedAddress)
            return c.text('Address not updated', 400);
        return c.json({ msg: updatedAddress }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createAddressData = createAddressData;
//update address
const updateAddressData = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const Address = await c.req.json();
    try {
        // search for the Address
        const searchedAddress = await (0, address_service_1.fetchAllAddress)(id);
        if (searchedAddress == undefined)
            return c.text("Address not found", 404);
        // get the data and update it
        const res = await (0, address_service_1.updateAddress)(id, Address);
        // return a success message
        if (!res)
            return c.text("Address not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateAddressData = updateAddressData;
//delete address
const deleteAddressData = async (c) => {
    const id = c.req.param("id");
    const response = await (0, address_service_1.deleteAddress)(parseInt(id));
    return c.json({ message: response }, 200);
};
exports.deleteAddressData = deleteAddressData;
