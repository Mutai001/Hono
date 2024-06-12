"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderMenuItemRelations = exports.ordersStatusRelations = exports.statusCatalogRelations = exports.commentsRelations = exports.ordersRelations = exports.restaurantOwnerRelations = exports.addressRelations = exports.menuItemsRelations = exports.categoryRelations = exports.restaurantRelations = exports.cityRelations = exports.stateRelations = exports.driversRelations = exports.usersRelations = exports.orderMenuItemTable = exports.ordersStatusTable = exports.statusCatalogTable = exports.commentsTable = exports.ordersTable = exports.restaurantOwnerTable = exports.addressTable = exports.menuItemsTable = exports.categoryTable = exports.restaurantTable = exports.cityTable = exports.stateTable = exports.driversTable = exports.usersTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
// users table no. 1
exports.usersTable = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 100 }).notNull(),
    contact_phone: (0, pg_core_1.varchar)("contact_phone", { length: 12 }).notNull(),
    phone_verified: (0, pg_core_1.boolean)("contact_verified"),
    email: (0, pg_core_1.varchar)("email", { length: 100 }).notNull(),
    email_verified: (0, pg_core_1.boolean)("email_verified"),
    confirmation_code: (0, pg_core_1.varchar)("confirmation_code", { length: 10 }),
    password: (0, pg_core_1.varchar)("password", { length: 100 }).notNull(),
    created_at: (0, pg_core_1.timestamp)("created_at").notNull(),
    updated_at: (0, pg_core_1.timestamp)("updated_at").notNull(),
});
// drivers table no. 2
exports.driversTable = (0, pg_core_1.pgTable)('drivers', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    car_make: (0, pg_core_1.varchar)('car_make', { length: 255 }).notNull(),
    car_model: (0, pg_core_1.varchar)('car_model', { length: 255 }).notNull(),
    car_year: (0, pg_core_1.integer)('car_year').notNull(),
    user_id: (0, pg_core_1.integer)('user_id').references(() => exports.usersTable.id, { onDelete: 'cascade' }).notNull(),
    online: (0, pg_core_1.boolean)('online').notNull(),
    delivering: (0, pg_core_1.boolean)('delivering').notNull(),
    created_at: (0, pg_core_1.timestamp)('created_at').notNull(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').notNull(),
});
// state table no. 3
exports.stateTable = (0, pg_core_1.pgTable)('state', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 50 }).notNull(),
    code: (0, pg_core_1.varchar)('code', { length: 50 }).notNull(),
});
// city table
exports.cityTable = (0, pg_core_1.pgTable)('city', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 50 }).notNull(),
    state_id: (0, pg_core_1.integer)('state_id').references(() => exports.stateTable.id, { onDelete: 'cascade' }).notNull(),
});
// restaurant table no. 4
exports.restaurantTable = (0, pg_core_1.pgTable)('restaurant', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 100 }).notNull(),
    street_address: (0, pg_core_1.varchar)('street_address', { length: 100 }).notNull(),
    zip_code: (0, pg_core_1.varchar)('zip_code', { length: 20 }).notNull(),
    state: (0, pg_core_1.varchar)('state', { length: 50 }).notNull(),
    city_id: (0, pg_core_1.integer)('city_id').references(() => exports.cityTable.id, { onDelete: 'cascade' }).notNull(),
    created_at: (0, pg_core_1.timestamp)('created_at').notNull(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').notNull(),
});
// category table no. 5
exports.categoryTable = (0, pg_core_1.pgTable)("category", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 100 }).notNull(),
});
// menu items table no. 6
exports.menuItemsTable = (0, pg_core_1.pgTable)("menu_item", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 100 }).notNull(),
    restaurant_id: (0, pg_core_1.integer)("restaurant_id").references(() => exports.restaurantTable.id, { onDelete: 'cascade' }).notNull(),
    category_id: (0, pg_core_1.integer)("category_id").references(() => exports.categoryTable.id, { onDelete: 'cascade' }).notNull(),
    description: (0, pg_core_1.text)("description"),
    ingredients: (0, pg_core_1.text)('ingredients'),
    price: (0, pg_core_1.decimal)("price", { precision: 10, scale: 2 }).notNull(),
    active: (0, pg_core_1.boolean)("active"),
    created_at: (0, pg_core_1.timestamp)("created_at").notNull(),
    updated_at: (0, pg_core_1.timestamp)("updated_at").notNull(),
    category: (0, pg_core_1.varchar)("category", { length: 20 }),
});
// address table no. 7
exports.addressTable = (0, pg_core_1.pgTable)("address", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    street_address_1: (0, pg_core_1.varchar)("street_address_1", { length: 100 }),
    street_address_2: (0, pg_core_1.varchar)("street_address_2", { length: 100 }),
    zip_code: (0, pg_core_1.varchar)("zip_code", { length: 20 }),
    delivery_instructions: (0, pg_core_1.text)("delivery_instructions"),
    user_id: (0, pg_core_1.integer)("user_id").references(() => exports.usersTable.id, { onDelete: 'cascade' }),
    city_id: (0, pg_core_1.integer)("city_id").references(() => exports.cityTable.id, { onDelete: 'cascade' }),
    created_at: (0, pg_core_1.timestamp)("created_at").notNull(),
    updated_at: (0, pg_core_1.timestamp)("updated_at").notNull(),
});
// restaurant owner table no. 8
exports.restaurantOwnerTable = (0, pg_core_1.pgTable)("restaurant_owner", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    restaurant_id: (0, pg_core_1.integer)("restaurant_id").references(() => exports.restaurantTable.id, { onDelete: "cascade" }).notNull(),
    owner_id: (0, pg_core_1.integer)("owner_id").references(() => exports.usersTable.id, { onDelete: "cascade" }).notNull(),
});
// orders table no. 9
exports.ordersTable = (0, pg_core_1.pgTable)('orders', {
    id: (0, pg_core_1.serial)('id').primaryKey().notNull(),
    restaurant_id: (0, pg_core_1.integer)('restaurant_id').references(() => exports.restaurantTable.id, { onDelete: 'cascade' }).notNull(),
    estimated_delivery_time: (0, pg_core_1.timestamp)('estimated_delivery_time').notNull(),
    actual_delivery_time: (0, pg_core_1.timestamp)('actual_delivery_time'),
    delivery_address_id: (0, pg_core_1.integer)('delivery_address_id').references(() => exports.addressTable.id, { onDelete: 'cascade' }).notNull(),
    user_id: (0, pg_core_1.integer)('user_id').references(() => exports.usersTable.id, { onDelete: 'cascade' }).notNull(),
    driver_id: (0, pg_core_1.integer)('driver_id').references(() => exports.driversTable.id, { onDelete: 'cascade' }).notNull(),
    price: (0, pg_core_1.decimal)('price', { precision: 10, scale: 2 }).notNull(),
    discount: (0, pg_core_1.decimal)('discount', { precision: 10, scale: 2 }).notNull(),
    final_price: (0, pg_core_1.decimal)('final_price', { precision: 10, scale: 2 }).notNull(),
    // comment: varchar('comment', { length: 255 }),
    created_at: (0, pg_core_1.timestamp)('created_at').notNull(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').notNull(),
});
// comments table no. 10
exports.commentsTable = (0, pg_core_1.pgTable)('comments', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    order_id: (0, pg_core_1.integer)('order_id').references(() => exports.ordersTable.id, { onDelete: 'cascade' }).notNull(),
    user_id: (0, pg_core_1.integer)('user_id').references(() => exports.usersTable.id, { onDelete: 'cascade' }).notNull(),
    comment_text: (0, pg_core_1.text)('comment_text').notNull(),
    created_at: (0, pg_core_1.timestamp)('created_at').notNull(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').notNull(),
});
// status catalog table no. 11
exports.statusCatalogTable = (0, pg_core_1.pgTable)('status_catalog', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 255 }).notNull(),
    order_status: (0, pg_core_1.varchar)('order_status', { length: 255 }).notNull(),
});
// orders status table no. 12
exports.ordersStatusTable = (0, pg_core_1.pgTable)('orders_status', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    order_id: (0, pg_core_1.integer)('order_id').references(() => exports.ordersTable.id, { onDelete: 'cascade' }).notNull(),
    status_id: (0, pg_core_1.integer)('status_id').references(() => exports.statusCatalogTable.id, { onDelete: 'cascade' }).notNull(),
    created_at: (0, pg_core_1.timestamp)('created_at').notNull(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').notNull(),
});
// order menu item table no. 13
exports.orderMenuItemTable = (0, pg_core_1.pgTable)('order_menu_item', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    order_id: (0, pg_core_1.integer)('order_id').references(() => exports.ordersTable.id, { onDelete: 'cascade' }).notNull(),
    menu_item_id: (0, pg_core_1.integer)('menu_item_id').references(() => exports.menuItemsTable.id, { onDelete: 'cascade' }).notNull(),
    quantity: (0, pg_core_1.integer)('quantity').notNull(),
    created_at: (0, pg_core_1.timestamp)('created_at').notNull(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').notNull(),
});
// Relationships
exports.usersRelations = (0, drizzle_orm_1.relations)(exports.usersTable, ({ many }) => ({
    addresses: many(exports.addressTable),
    drivers: many(exports.driversTable),
    orders: many(exports.ordersTable),
    comments: many(exports.commentsTable),
    restaurantOwners: many(exports.restaurantOwnerTable),
}));
exports.driversRelations = (0, drizzle_orm_1.relations)(exports.driversTable, ({ one, many }) => ({
    user: one(exports.usersTable, {
        fields: [exports.driversTable.user_id],
        references: [exports.usersTable.id],
    }),
    orders: many(exports.ordersTable),
}));
exports.stateRelations = (0, drizzle_orm_1.relations)(exports.stateTable, ({ many }) => ({
    cities: many(exports.cityTable),
}));
exports.cityRelations = (0, drizzle_orm_1.relations)(exports.cityTable, ({ one, many }) => ({
    state: one(exports.stateTable, {
        fields: [exports.cityTable.state_id],
        references: [exports.stateTable.id],
    }),
    addresses: many(exports.addressTable),
    restaurants: many(exports.restaurantTable),
}));
exports.restaurantRelations = (0, drizzle_orm_1.relations)(exports.restaurantTable, ({ one, many }) => ({
    city: one(exports.cityTable, {
        fields: [exports.restaurantTable.city_id],
        references: [exports.cityTable.id],
    }),
    menuItems: many(exports.menuItemsTable),
    orders: many(exports.ordersTable),
    restaurantOwners: many(exports.restaurantOwnerTable),
}));
exports.categoryRelations = (0, drizzle_orm_1.relations)(exports.categoryTable, ({ many }) => ({
    menuItems: many(exports.menuItemsTable),
}));
exports.menuItemsRelations = (0, drizzle_orm_1.relations)(exports.menuItemsTable, ({ one, many }) => ({
    restaurant: one(exports.restaurantTable, {
        fields: [exports.menuItemsTable.restaurant_id],
        references: [exports.restaurantTable.id],
    }),
    category: one(exports.categoryTable, {
        fields: [exports.menuItemsTable.category_id],
        references: [exports.categoryTable.id],
    }),
    orderMenuItems: many(exports.orderMenuItemTable),
}));
exports.addressRelations = (0, drizzle_orm_1.relations)(exports.addressTable, ({ one, many }) => ({
    user: one(exports.usersTable, {
        fields: [exports.addressTable.user_id],
        references: [exports.usersTable.id],
    }),
    city: one(exports.cityTable, {
        fields: [exports.addressTable.city_id],
        references: [exports.cityTable.id],
    }),
    orders: many(exports.ordersTable),
}));
exports.restaurantOwnerRelations = (0, drizzle_orm_1.relations)(exports.restaurantOwnerTable, ({ one }) => ({
    restaurant: one(exports.restaurantTable, {
        fields: [exports.restaurantOwnerTable.restaurant_id],
        references: [exports.restaurantTable.id],
    }),
    owner: one(exports.usersTable, {
        fields: [exports.restaurantOwnerTable.owner_id],
        references: [exports.usersTable.id],
    }),
}));
exports.ordersRelations = (0, drizzle_orm_1.relations)(exports.ordersTable, ({ one, many }) => ({
    restaurant: one(exports.restaurantTable, {
        fields: [exports.ordersTable.restaurant_id],
        references: [exports.restaurantTable.id],
    }),
    deliveryAddress: one(exports.addressTable, {
        fields: [exports.ordersTable.delivery_address_id],
        references: [exports.addressTable.id],
    }),
    user: one(exports.usersTable, {
        fields: [exports.ordersTable.user_id],
        references: [exports.usersTable.id],
    }),
    driver: one(exports.driversTable, {
        fields: [exports.ordersTable.driver_id],
        references: [exports.driversTable.id],
    }),
    comments: many(exports.commentsTable),
    orderStatus: many(exports.ordersStatusTable),
    orderMenuItems: many(exports.orderMenuItemTable),
}));
exports.commentsRelations = (0, drizzle_orm_1.relations)(exports.commentsTable, ({ one }) => ({
    order: one(exports.ordersTable, {
        fields: [exports.commentsTable.order_id],
        references: [exports.ordersTable.id],
    }),
    user: one(exports.usersTable, {
        fields: [exports.commentsTable.user_id],
        references: [exports.usersTable.id],
    }),
}));
exports.statusCatalogRelations = (0, drizzle_orm_1.relations)(exports.statusCatalogTable, ({ many }) => ({
    orderStatus: many(exports.ordersStatusTable),
}));
exports.ordersStatusRelations = (0, drizzle_orm_1.relations)(exports.ordersStatusTable, ({ one }) => ({
    order: one(exports.ordersTable, {
        fields: [exports.ordersStatusTable.order_id],
        references: [exports.ordersTable.id],
    }),
    status: one(exports.statusCatalogTable, {
        fields: [exports.ordersStatusTable.status_id],
        references: [exports.statusCatalogTable.id],
    }),
}));
exports.orderMenuItemRelations = (0, drizzle_orm_1.relations)(exports.orderMenuItemTable, ({ one }) => ({
    order: one(exports.ordersTable, {
        fields: [exports.orderMenuItemTable.order_id],
        references: [exports.ordersTable.id],
    }),
    menuItem: one(exports.menuItemsTable, {
        fields: [exports.orderMenuItemTable.menu_item_id],
        references: [exports.menuItemsTable.id],
    }),
}));
