import { Context } from "hono";
import { createAddress, deleteAddress, fetchOneAddress, fetchAllAddress, updateAddress } from './address.service';

//fetch all address
export const getAllAddressData = async (c: Context) => {
   
     try {
        //limit the number of Addresss to be returned

        const limit = Number(c.req.query('limit'))

        const data = await fetchAllAddress(limit);
        if (data == null || data.length == 0) {
            return c.text("Address not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
     
}


// fetch one address
export const fetchOneAddressData = async (c: Context) => {
    const id = c.req.param("id")
    const address = await fetchOneAddress(parseInt(id))
    if(address === undefined){
        return c.json({message: "No address found"},404)
    }
    return c.json(address,200)
}

//create address
export const createAddressData = async (c: Context, next: Function) => {
     try {
        const id = parseInt(c.req.param('id'), 10);
        if (isNaN(id)) return c.text('Invalid id', 400);
        const address = await c.req.json();
        const updatedAddress = await updateAddress(id, address);

        if (!updatedAddress) return c.text('Address not updated', 400);
        return c.json({ msg: updatedAddress }, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400);
    }
}

//update address
export const updateAddressData = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const Address = await c.req.json();
    try {
        // search for the Address
        const searchedAddress = await fetchAllAddress(id);
        if (searchedAddress == undefined) return c.text("Address not found", 404);
        // get the data and update it
        const res = await updateAddress(id, Address);
        // return a success message
        if (!res) return c.text("Address not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

//delete address
export const deleteAddressData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await deleteAddress(parseInt(id))
    return c.json({message: response},200)

}