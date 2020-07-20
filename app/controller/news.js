/*
 * @Author: gaominghao
 * @Date: 2020-07-17 14:42:38
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-17 15:05:00
 * @Description: none
 */


'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);
    await ctx.render('news/list.tpl', {
      list: newsList
    })
  }
}

module.exports = NewsController