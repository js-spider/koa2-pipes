const Router = require('koa-router')
const user = require('../api/v1/user/router');
const recorder = require('../api/v1/recorder/router');
const project = require('../api/v1/project/router');
const router = new Router();
router.use('/user',user.routes(), user.allowedMethods());
router.use('/recorder',recorder.routes(), recorder.allowedMethods());
router.use('/project',project.routes(), project.allowedMethods());


module.exports = router.use('/api/v1',router.routes(),router.allowedMethods());
