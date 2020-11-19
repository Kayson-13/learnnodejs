const app = require('./app');
const config  = require('./app/config');

app.listen(config.APP_PORT, () => {
  console.log(`Koa服务器在${config.APP_PORT}端口启动成功！`)
});