'use strict';

 var info = require('../mock/info'),
     menu = require('../mock/menu');
module.exports = function(router, app) {
  // mock api

   router.get('/getInfo', function*() {
     var query = this.query || {};
     var res = {};

     console.log('请求开票详情接口参数:', query);
     res = info.success();
     this.body = res;
   });
    router.get('/getMenu', function*() {
        var query = this.query || {};
        var res = {};

        console.log('请求开票详情接口参数:', query);
        res = menu.success();
        this.body = res;
    });
};