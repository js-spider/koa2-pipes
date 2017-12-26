/**
 * Created by pc on 17-11-13.
 */
let path = require('path');
let fs = require('fs');
const recorderCTL = module.exports = {};
recorderCTL.index = async (ctx)=>{
    ctx.body = 'ZetYun log service';
};

/**
 * @api {POST} /log/:id/del  DelLogFile
 * @apiName DelLogFile
 * @apiGroup Log
 */
recorderCTL.del = async (ctx)=>{
    try{
       /* let logfile = path.join(config.location, `${ctx.req.params.id}.log`);
        fs.unlink(logfile, function (err) {
            let response = err ? {code: 1, message: err.message} : {code: 0};
            res.send(response);
        });*/
    }catch(e){
        ctx.code = e.code || 10001;
        ctx.body = e.message || '删除记录失败';
    }
};
