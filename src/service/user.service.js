class UserService {
  async create(user) {
    // 将user存储到数据库中
    console.log(`用户名：${user.name} , 密码： ${user.password}`);

    return '创建用户成功！';
  }
}

module.exports = new UserService();