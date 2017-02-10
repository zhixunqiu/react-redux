/**
 * Created by didi on 17/1/20.
 */
'use strict';
var _ = require('lodash');
var defaults = {
    "status": 0,
    "message": "",
    "data": {}
};

var res = {
    success: function() {
        return _.extend({}, defaults, {
            data: {
                list:['123','微微']
            }
        });
    },
    error: function(errorStatus) {
        errorStatus = errorStatus || 1;
        return _.extend({}, defaults, {
            "status": errorStatus,
            "message": "网络错误"
        });
    }
};

module.exports = res;