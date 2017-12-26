/**
 * Created by pc on 17-11-14.
 */
const Joi = require('joi');
module.exports = function(params,schema,options){
    let option = {
        stripUnknown : true
    };
    Object.assign(option,options)
    let joiResult = Joi.validate(params, schema,option);
    if(joiResult.error){
        throw new Error(joiResult.error.message)
    };
    return joiResult.value;
};

