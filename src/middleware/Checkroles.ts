import dotenv from 'dotenv';
import { verify } from 'hono/jwt';
import { Context, Next } from 'hono';



// Middleware to check user role
export const checkRole = (role: string) => {
  return async (c: Context, next: Function) => {
    const user = c.get('user'); // Assuming user is set in context after authentication
    if (!user) {
      return c.json({ message: 'Unauthorized' }, 401);
    }
    if (user.role !== role) {
      return c.json({ message: 'Forbidden' }, 403);
    }
    await next();
  };
};

