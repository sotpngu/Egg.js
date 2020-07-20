/*
 * @Author: gaominghao
 * @Date: 2020-07-17 14:33:38
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-20 15:53:51
 * @Description: none
 */ 
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index () {
    const { ctx } = this;

    ctx.logger.info('获取配置域名：', this.config.baseCom);
    
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
