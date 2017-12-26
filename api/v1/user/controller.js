/**
 * Created by pc on 17-11-10.
 */
const Joi = require('joi');
const joiValidate = require('../../../utils/joiValidate');
const userSVC = require('./service');
const logger = h.logger('[user]');
const userCTL = module.exports = {};

userCTL.init = async (ctx) => {
    ctx.body = 'visit init'
};
userCTL.test = async (ctx) =>{

};
userCTL.login = async (ctx)=>{
    try{
        let ps = ctx.request.body;
        let session = ctx.session;
        let schema = Joi.object().keys({
            account:Joi.string().required().error(new Error('用户名不能为空')),
            password:Joi.string().required().error(new Error('密码不能为空'))
        })
        let value = joiValidate(ps, schema);
        let user = await userSVC.login(value);
        session.user = user;
        ctx.body = user;
    }catch(e){
        ctx.code = 10001;
        ctx.body = e.message || '用户登录失败'
    }
}
userCTL.getLogs = async (ctx)=>{
    try{
        let ps = ctx.params;
        let user = ctx.session.user;
        let schema = Joi.object().keys({
            page: Joi.number().empty('').integer().default(1),
            limit: Joi.number().empty('').integer().default(20),
            orderBy: Joi.string().uppercase().empty('').valid('ASC','DESC').default('DESC'),
            orderKey: Joi.string().empty('').valid('id','userId','type','createdAt').default('id'),
            search: Joi.string().empty(''),
            startAt: Joi.date().empty(''),
            endAt: Joi.date().min(Joi.ref('startAt')).empty(''),
            type: Joi.number().integer().empty(''),
            userId: Joi.number().integer().empty(''),
            desc: Joi.string().empty('')
        })
        let value = joiValidate(ps, schema);
        let result = await userSVC.getLogs(value,user);
        ctx.body = result;
    }catch(e){
        logger.error(e)
        ctx.code = 101001;
        ctx.body = e.message || '获取日志审计信息列表失败'
    }
};
userCTL.createLogs = async(ctx)=>{
    try{
        let body = ctx.request.body;
        let user = ctx.session.user;
        let schema = Joi.object().keys({
            type: Joi.string().required().error(new Error('type不能为空')),
            userId: Joi.string().required().error(new Error('userId不能为空')),
            desc: Joi.string().required().error(new Error('desc不能为空'))
        })
        let value = joiValidate(body, schema);
        let result = await userSVC.createLogs(value,user);
        ctx.body = result;
    }catch(e){
        ctx.code = 10002
        ctx.body = e.message || '添加日志审计失败'
    }
};
