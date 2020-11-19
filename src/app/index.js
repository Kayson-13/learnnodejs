const Koa = require('koa');
const bodyparser = require('koa-bodyparser');

const app = new Koa();
const userRouter = require('../router/user.router');

app.use(bodyparser());
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

module.exports = app;