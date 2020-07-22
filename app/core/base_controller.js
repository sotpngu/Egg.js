/*
 * @Author: gaominghao
 * @Date: 2020-07-21 15:21:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-22 00:00:22
 * @Description: none
 */ 

const { Controller } = require('egg');
class BaseController extends Controller {
  get user () {
    return this.ctx.session.user;
  }

  success (data) {
    this.ctx.body = {
      success: true,
      data
    }
  }

  notFound(msg) {
    msg = msg || 'not Found';
    this.ctx.throw(404, msg);
  }

}

module.exports = BaseController;
