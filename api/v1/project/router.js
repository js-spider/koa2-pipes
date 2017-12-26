const Router = require('koa-router')
const projectCTL = require('./controller')
const project = new Router();

project.get('/',projectCTL.index); // list

module.exports =  project;