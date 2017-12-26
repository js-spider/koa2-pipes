/**
 * Created by pc on 17-11-15.
 */
const config = require('config-lite')(__dirname);
const authMDL = require('./model.js');
const authSVC = module.exports = {};

//类验证
authSVC.classAuth = async(type,pcode,user)=>{
    if(user._superUser) return true;
    pcode = pcodeObj[pcode];
    type =  resourceTypeObj[type];
    let auth = await authMDL.classAuth(pcode,type,user);
    h.assert(!!auth,'You are not authorized to access this API')
};

const resourceTypeObj = {
    'project':1,
    'module':2,
    'dataSource':3,
    'user':4,
    'privilege':5,
    'DB':6,
    'table':7,
    'cluster':8
};
const pcodeObj = {
    'read': 1,
    'create':2,
    'edit':3,
    'delete':4,
    'run':5,
    'manage':6
};