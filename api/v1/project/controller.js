/**
 * Created by pc on 17-11-15.
 */
const Joi = require('joi');
const joiValidate = require('../../../utils/joiValidate');
const authSVC = require('../auth/service');
const projectSVC = require('./service');
const logger = h.logger('[project]');

const projectCTL = module.exports = {};

projectCTL.index = async(ctx)=>{
    try{
        let ps = ctx.params,user = ctx.session.user;
        await authSVC.classAuth('project','read',user);
        let schema = Joi.object().keys({
            page : Joi.number().empty('').integer().default(1),
            num : Joi.number().empty('').integer().default(15),
            orderKey : Joi.string().empty('').valid('id','userId','type','createdAt').default('id'),
            orderBy : Joi.string().uppercase().empty('').valid('ASC','DESC').default('DESC'),
            keyword : Joi.string().empty(''),
            mine :Joi.boolean(),
            tagIds: Joi.array().items(Joi.number())
        })
        let value = joiValidate(ps,schema);
        let result = await projectSVC.index(value,user);
    }catch(e){
        logger.error(e);
    }

}