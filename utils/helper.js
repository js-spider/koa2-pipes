'use strict';
const crypto = require('crypto');
const logger = require('./logger').logger;
const helpers = {
    assert: function(toTest, message, code) {
        if (!toTest) {
            let err = new Error(message);
            if (typeof code != 'undefined') {
                err.code = code;
            }
            throw err;
        }
    },
    md5 : function (string) {
        return crypto.createHash('md5').update(string, 'utf-8').digest('hex')
    },
    logger:function(category){
        return logger(category)
    }
}

global.h = helpers;
module.exports = helpers;
