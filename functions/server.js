const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const serverless = require("serverless-http");
const cors = require("@koa/cors");
const ssr = require("./ssr/render");
const app = new Koa();
const router = new Router();

app.use(bodyParser());

const routerBasePath =
  process.env.NODE_ENV === "dev" ? `/` : `/.netlify/functions/server/`;

router.get(routerBasePath, ssr);
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());
app.use(ssr);

module.exports.handler = serverless(app);
