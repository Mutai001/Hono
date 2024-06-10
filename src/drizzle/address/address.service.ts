import { promise } from "zod";
import { addressinsert, addressselect, addressTable, cityinsert, cityselect, cityTable} from '../schema';
import db from "../db";
import { eq } from "drizzle-orm";

//fetching all address
export const fetchAllAddress = async (): Promise<addressselect[]| null> => {
    return await db.query.addressTable.findMany()
} 

//fetching one address
export const fetchOneAddress = async (id: number): Promise<addressinsert | undefined> =>{
    return await  db.query.addressTable.findFirst({where: eq(addressTable.id,id)})
}

//creating a address
export const createAddress  = async (address: addressinsert)=> {
    await db.insert(addressTable).values(address)
    return "Address created successfully"  
}


//updating a address
export const updateAddress = async(id:number,address:addressinsert) => {
    await db.update(addressTable).set(address).where(eq(addressTable.id,id));
    return "Address updated successfully"
}
   

//deleting a address
export const deleteAddress = async (id: number) =>{
    await db.delete(addressTable).where(eq(addressTable.id,id))
    return "Address deleted successfully"
}