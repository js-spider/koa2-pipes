const Koa = require('koa')
const log4js = require('./utils/logger').log4js;
const logger = require('./utils/logger').logger('[server error]');
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const session = require('koa-session-minimal');
const redisStore = require('koa-redis');
const router = require('./routes');
const config = require('config-lite')(__dirname);
const reqFormat = require('./utils/reqFormat');
const resFormat = require('./utils/resFormat');
const httpLogger = log4js.getLogger("http");
const timerLogger = log4js.getLogger("outTimer");
const app = new Koa();
app.use(async (ctx,next)=>{
    await log4js.connectLogger(httpLogger, { level: 'ALL' })(ctx.req,ctx.res,next)
});
//onerror(app);
app.use(session({
    store:redisStore({
        host:config.redis.host,
        port:config.redis.port,
        db:0,
    })
}));
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}));
app.use(json());
app.use(reqFormat());
app.use(resFormat());
app.use(async function(ctx,next){
    let preTimer = new Date().getTime();
    await next();
    let ms = new Date().getTime();
    if(ms-preTimer > 500){
        timerLogger.info(ctx.req.url + ' :: ',ms-preTimer + ' ms');
    }
});
// routes
app.use(router.routes()).use(router.allowedMethods());
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
    logger.error(err);
});

module.exports = app;
