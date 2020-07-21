/*
 * @Author: gaominghao
 * @Date: 2020-07-20 10:30:48
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-21 10:54:23
 * @Description: none
 */

const Service = require('egg').Service;

class NewsService extends Service {
  async create (req) {
    console.log(req)
    return req;
  }
}

module.exports = NewsService



