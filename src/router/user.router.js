const Router = require('koa-router');

// const controller = require('../controller/user.controller'); 
// 使用的时候就用： controller.create
const { create } = require('../controller/user.controller'); 

const userRouter = new Router({prefix: '/user'});

userRouter.post('/', create);

module.exports = userRouter;