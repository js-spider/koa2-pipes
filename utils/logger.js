/**
 * log4js
 */
const log4js = require('log4js');
log4js.configure({
    appenders:{
        error:{
            type:'file',
            level:'error',
            filename:'../log/error/pipes-error.log',
        },
        info:{
            type:'dateFile',
            level:'info',
            filename:'../log/info/pipes-info.log',
            pattern:'.yy-MM-dd',
        },
        http:{
            type:'dateFile',
            level:'auto',
            filename:'../log/http/pipes-http.log',
            pattern:'.yy-MM-dd',
        },
        outTimer:{
            type:'file',
            level:'info',
            filename:'../log/timer/outTimer.log',
        },
        infoFilter:{
            type:'logLevelFilter',
            appender:'info',
            level:'info',
        },
        errorFilter:{
            type:'logLevelFilter',
            appender:'error',
            level:'error',
        }
    },
    categories:{
        http:{appenders:['http'],level:'ALL'},
        outTimer:{appenders:['outTimer'],level:'info'},
        default:{appenders:['errorFilter','info'],level:'info'},
    }
});
exports.logger =  function(category,level){
    category = category || 'main';
    let log =  log4js.getLogger(category);
    log.level = level || 'info';
    return log;
};
exports.log4js = log4js;

