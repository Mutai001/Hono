import { Context } from "hono";
import { createAddress, deleteAddress, fetchOneAddress, fetchAllAddress, updateAddress } from './address.service';

//fetch all address
export const getAllAddressData = async (c: Context) => {
    const adderss= await fetchAllAddress()
    if(adderss === null){
        return c.json({message: "No address found"})
    }
    return c.json(adderss,200)
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

//delete address
export const deleteAddressData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await deleteAddress(parseInt(id))
    return c.json({message: response},200)

}