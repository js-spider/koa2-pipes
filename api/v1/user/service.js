/**
 * Created by pc on 17-11-10.
 */
const config = require('config-lite')(__dirname);
const userMDL = require('./model.js');
const userSVC = module.exports = {};

//用户登录
userSVC.login = async (params)=>{
    let user = await userMDL.login(params);
    h.assert(user,'用户不存在');
    h.assert(user.pwdhash === h.md5(params.password),'密码输入有误');
    delete user.pwdhash;
    if(user.autoKey == 1 || user.group === 0){
        user = user.get();
        user._superUser = true;
    }
    return user;
};
//获取日志审计列表
userSVC.getLogs = async (params,user)=>{
    let logs = await userMDL.getLogs(params,user);
    logs = logs || [];
    return logs;
}
//添加日志审计
userSVC.createLogs = async(params,user)=>{
    let log = await userMDL.createLogs(params,user);
    return log;
}

