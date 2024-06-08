import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { number } from 'zod'
import "dotenv/config"
import { Logger } from 'drizzle-orm'
import { UserRouter } from './drizzle/users/user.router'
import { addressRouter } from './drizzle/address/address.router'
// import userRoutes from './routes/user.routes';


const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/users', UserRouter)
app.route('/address',addressRouter)
app.route('/category',categoryRouter)
app.route('/city',cityRouter)
app.route('/comments',commentsRouter)
app.route('/drivers',driversRouter)
app.route('/menu_item',menu_itemRouter)
app.route('/order_menu_item',order_menu_itemRouter)
app.route('/orders',ordersRouter)
app.route('/orders_status',orders_statusRouter)
app.route('/restaurant',restaurantRouter)
app.route('/restaurant_owner',restaurant_ownerRouter)
app.route('/state',stateRouter)
app.route('/status_catalog',status_catalogRouter)
app.route('/category',categoryRouter)





// const port = 3000 
const port = Number(process.env.PORT)
console.log(`Server is running on port ${process.env.PORT}`);

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT),
});











