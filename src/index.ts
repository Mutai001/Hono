import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { number } from 'zod'
import "dotenv/config"
import { Logger } from 'drizzle-orm'
import { UserRouter } from './drizzle/users/user.router'
import { addressRouter } from './drizzle/address/address.router'
import { categoryRouter } from './drizzle/category/category.router'
import { CityRouter } from './drizzle/city/city.router'
import { commentsRouter } from './drizzle/comments/comments.router'
import { driverRouter } from './drizzle/drivers/drivers.router'
import { menuItemRouter } from './drizzle/menu_item/menu_item.router'
import { OrderMenuItemRouter } from './drizzle/order_menu_item/order_menu_item.router'
import { ordersRouter } from './drizzle/orders/orders.router'
import { OrderStatusRouter } from './drizzle/orders_status/order_status.router'
import { restaurantRouter } from './drizzle/restaurant/restaurant.router'
import { RestaurantOwnerRouter } from './drizzle/restaurant_owner/restaurant_owner.router'
import { StateRouter } from './drizzle/state/state.router'
import { status_catalogRouter } from './drizzle/status_catalog/status_catalog.router'
// import userRoutes from './routes/user.routes';


const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/users', UserRouter)
app.route('/address',addressRouter)
app.route('/category',categoryRouter)
app.route('/city',CityRouter)
app.route('/comments',commentsRouter)
app.route('/drivers',driverRouter)
app.route('/menu_item',menuItemRouter)
app.route('/order_menu_item',OrderMenuItemRouter)
app.route('/orders',ordersRouter)
app.route('/orders_status',OrderStatusRouter)
app.route('/restaurant',restaurantRouter)
app.route('/restaurant_owner',RestaurantOwnerRouter)
app.route('/state',StateRouter)
app.route('/status_catalog',status_catalogRouter)
app.route('/category',categoryRouter)





// const port = 3000 
const port = Number(process.env.PORT)
console.log(`Server is running on port ${process.env.PORT}`);

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT),
});











