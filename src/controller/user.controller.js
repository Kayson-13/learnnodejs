const service = require ('../service/user.service');

class UserController {
  async create(ctx, next) {
    // 获取用户信息并处理
    const user = ctx.request.body;
    // 查询数据（封装到service中）
    const result = await service.create(user);
    // 返回数据
    ctx.body = result; 
  }
}

module.exports = new UserController();