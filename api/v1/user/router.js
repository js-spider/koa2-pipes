const Router = require('koa-router')
const userCTL = require('./controller')
const user = new Router();

user.get('/init',userCTL.init);
user.get('/test',userCTL.test);
user.post('/login',userCTL.login);
user.get('/auditLog',userCTL.getLogs);
user.get('/auditLog/download',userCTL.getLogs);
user.post('/auditLog',userCTL.createLogs);
/*user.get('/tf/v1/privilege/roles',userCTL.roleList);
user.post('/tf/v1/user/login', userCTL.login);
user.put('/tf/v1/user/:id', userCTL.updateUser);
user.get('/tf/v1/user/resource',userCTL.getResource);
user.post('/tf/v1/user/allocationResource',userCTL.allocationResource);
user.get('/tf/v1/user/auth',userCTL.userAuth);*/

module.exports =  user;