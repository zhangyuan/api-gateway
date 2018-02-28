const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = ctx.request.headers;
});

app.listen(3000);