"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
require("dotenv/config");
const app = new hono_1.Hono();
app.get('/', (c) => {
    return c.text('Hello Hono!');
});
// const port = 3000 
const port = Number(process.env.PORT);
console.log(`Server is running on port ${process.env.PORT}`);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: Number(process.env.PORT),
});
