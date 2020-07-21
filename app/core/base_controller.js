/*
 * @Author: gaominghao
 * @Date: 2020-07-21 15:21:04
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-21 16:11:09
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
}
