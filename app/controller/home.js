/*
 * @Author: gaominghao
 * @Date: 2020-07-17 14:33:38
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-20 15:29:03
 * @Description: none
 */ 
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index () {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
