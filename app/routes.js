'use strict';

// var proxy = require('koa-proxy');

// var list = require('../mock/list');
// var invoiceHistory = require('../mock/invoiceHistory');
// var invoiceDetail = require('../mock/invoiceDetail');
// var invoiceStroke = require('../mock/invoiceStroke');
// var logis = require('../mock/logisRecord');
// var invoiceList = require('../mock/invoice');
// var invoiceInfo = require('../mock/invoiceInfo');
// var invoiceCity = require('../mock/invoiceCity');
// var invoiceCityByIds = require('../mock/invoiceCityByIds');
// var userCompetence = require('../mock/userCompetence');
// var invoiceSave = require('../mock/invoiceSave');
// var guide = require('../mock/guide');
// var invoiceReplay = require('../mock/invoiceReplay');
// var adBanner = require('../mock/adBanner');
module.exports = function(router, app) {
  // mock api
  // router.get('/api/list', function*() {
  //   var query = this.query || {};
  //   var name = query.name || 'name';
  //   var sex = query.sex || -1;

  //   this.body = list;
  // });
  // router.get('/scinvoice/perm/validatePerm', function*() {
  //   var query = this.query || {};

  //   console.log('请求灰度测试接口参数:', query);

  //   this.body = guide.success();
  // });
  // router.get('/scinvoice/apply/getApplyHistory', function*() {
  //   var query = this.query || {};
  //   var res = {};

  //   console.log('请求开票历史接口参数:', query);
  //   if (query.pageNum < 3) {
  //     res = invoiceHistory.success();
  //   } else {
  //     res = invoiceHistory.empty();
  //   }
  //   this.body = res;
  // });

  // router.get('/scinvoice/apply/getApply', function*() {
  //   var query = this.query || {};
  //   var res = {};

  //   console.log('请求开票详情接口参数:', query);
  //   res = invoiceDetail.success();
  //   this.body = res;
  // });
  // router.get('/scinvoice/order/getApplyOrderList', function*() {
  //   var query = this.query || {};
  //   var res = {};

  //   console.log('请求所含行程接口参数:', query);
  //   res = invoiceStroke.success();
  //   this.body = res;
  // });
  // router.get('/scinvoice/express/getExpressInfo', function*() {
  //   var query = this.query || {};
  //   var res = {};

  //   console.log('请求物流记录接口参数:', query);
  //   console.log('applicationId:', query.applicationId);
  //   if (query.applicationId == 5) {
  //     console.log('55555555');
  //     res = logis.success2();
  //   } else {
  //     console.log('33333');
  //     res = logis.success();
  //   }

  //   this.body = res;
  // });

  // router.get('/scinvoice/order/getOrderList', function*() {
  //   var query = this.query || {};
  //   var name = query.name || 'name';
  //   var sex = query.sex || -1;
  //   //if (query.pageNum < 3) {
  //   //invoiceList.data = [];
  //   if (query.onBusiness == 1) {
  //     if (query.pageNum == 1) {
  //       this.body = invoiceList.buss;
  //     } else if (query.pageNum == 2) {
  //       this.body = invoiceList.buss2;
  //     } else if (query.pageNum == 3) {
  //       this.body = invoiceList.buss3;
  //     } else {
  //       this.body = invoiceList.buss4;
  //     }
  //   }
  //   if (query.onBusiness == 0) {
  //     if (query.pageNum == 1) {
  //       this.body = invoiceList.person;
  //     } else if (query.pageNum == 2) {
  //       this.body = invoiceList.person2;
  //     } else if (query.pageNum == 3) {
  //       this.body = invoiceList.person3;
  //     } else {
  //       this.body = invoiceList.person4;
  //     }
  //   }
  //   //} else {
  //   //this.body = {
  //   //"status": 0,
  //   //"message": "success",
  //   // "data": []
  //   //}
  //   //}
  // });

  // router.get('/scinvoice/apply/getTemplate', function*() {
  //   var query = this.query || {};
  //   var name = query.name || 'name';
  //   var sex = query.sex || -1;

  //   this.body = invoiceInfo;
  // });

  // router.get('/scinvoice/area/selectArea', function*() {
  //   var query = this.query || {};
  //   var id = query.parentId
  //   switch (id) {
  //     case "0":
  //       this.body = invoiceCity["0"];
  //       break;
  //     case "2":
  //       this.body = invoiceCity["2"];
  //       break;
  //     case "52":
  //       this.body = invoiceCity["52"];
  //       break;
  //   }
  // });
  // router.get('/scinvoice/area/selectAreaByIds', function*() {
  //   var query = this.query || {};
  //   var id = query.parentId
  //   this.body = invoiceCityByIds;
  // });
  // router.get('/scinvoice/passenger/getPassengerStatus', function*() {
  //   var query = this.query || {};

  //   this.body = userCompetence;
  // });
  // router.post('/scinvoice/apply/save', function*() {
  //   var query = this.query || {};
  //   var params = this.request.body;
  //   console.log('请求保存申请接口参数:', params);
  //   this.body = invoiceSave;
  // });
  // router.get('/scinvoice/apply/reSendTripList', function*() {
  //   var query = this.query || {};
  //   var res = {};

  //   console.log('重新发送电子行程单接口参数:', query);
  //   res = invoiceReplay.success();
  //   this.body = res;
  // });
  // router.get('/scinvoice/banner/get', function*() {
  //   var query = this.query || {};
  //   var res = {};

  //   console.log('广告接口参数:', query);
  //   res = adBanner.hide();
  //   this.body = res;
  // });

  // // proxy api
  // router.get('/api/baidu', proxy({
  //   url: 'http://baidu.com'
  // }));
};