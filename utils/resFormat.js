'use strict';
function resFormat() {
    return async function(ctx,next){
        await next();
        var body = ctx.body;
        if (body) {
            var response = {
                status: {
                    code: (ctx.code && ctx.code != 10000) ? ctx.code : 10000,
                    message: (ctx.code && ctx.code != 10000) ? body : "Success"
                },
                data: (ctx.code && ctx.code != 10000) ? "" : body
            };
            ctx.status = response.status.code == 10000 ? 200 : 401;
            ctx.body = response;
        } else { //无路由
            ctx.body = {
                status: {
                    code: 9999,
                    message: "访问API地址错误"
                },
                data: ""
            };
            ctx.status = 405;
        }
    }
}
module.exports = resFormat;