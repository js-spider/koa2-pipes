/**
 * Created by pc on 17-11-16.
 */
const config = require('config-lite')(__dirname);
const projectMDL = require('./model.js');
const projectSVC = module.exports = {};

// 获取 project 列表
projectSVC.index = async (params,user)=>{
    let result = await projectMDL.index(params,user);
};