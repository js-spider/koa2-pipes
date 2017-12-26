/**
 * Created by pc on 17-11-14.
 */
'use strict';
function reqFormat(){
    return async function(ctx,next){
        ctx.params = ctx.params || {};
        if(ctx.request.query){
            Object.assign(ctx.params,ctx.request.query)
        }
        await next()
    }
}
module.exports = reqFormat;