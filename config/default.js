/**
 * Created by pc on 17-11-10.
 */
const config = {
    "port": 8888,
    "version": "1.0.0",
    "postgre": {
        "host": "192.168.1.110",
        "port": 5432,
        "user": "triceed",
        "password": "Server2008!",
        "database": "datacanvas"
    },
    "redis":{
        host:'127.0.0.1',
        port:6379,
    },
    logFile:'/home/pc/project/koa2/log',// pipes 日志所在目录
};
module.exports = config;

