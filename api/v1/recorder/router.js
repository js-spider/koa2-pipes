/**
 * Created by pc on 17-11-13.
 */
const recorderCTL = require('./controller');
const Router = require('koa-router');
const recorder = new Router();
recorder.get('/index',recorderCTL.index);
recorder.post('/log/:id/del',recorderCTL.del);



module.exports =  recorder;