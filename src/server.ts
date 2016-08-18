import * as config from 'config';
import * as log from './log';
import * as Koa from 'koa';

const app = new Koa();

app.use(async (ctx, next) => {
  ctx.response.body = 'Hello world!!!';
});

const port = config.get('server.port');
app.listen(port);
log.info(`Server started at port ${port}`);
