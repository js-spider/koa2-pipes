/**
 * Created by pc on 17-11-13.
 */
const config = require('config-lite')(__dirname);
const Sequelize = require('sequelize');
const fs = require('fs');
let client = new Sequelize(config.postgre.database,config.postgre.user,config.postgre.password,{
        host: config.postgre.host,
        dialect: 'postgres',
        timezone:"+08:00",
        define:{
            timestamps:false,
        },
        pool: {
            max: 10,
            min: 0,
            idle: 10000
        },
        logging:true
});
let models = {};
let model;
fs.readdirSync(`${__dirname}/sequelize`).filter(function(file){
    return file.indexOf('.')!== 0 && file != 'index.js';
}).forEach(function(file){
    model = client.import(`${__dirname}/sequelize/${file}`);
    models[model.name] = model;
})
Object.keys(models).forEach(function(modelName) {
    if (models[modelName].options.hasOwnProperty('associate')) {
        models[modelName].options.associate(models);
    }
});
module.exports = models;
module.exports.client = client;