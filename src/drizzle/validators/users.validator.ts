import { z } from 'zod';

export const createUserValidator = z.object({
    fullname: z.string().min(5,{ message: "Must be 5 or more characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(4,{ message: "Must be 4 or more characters long" }),
});