/*
 * @Author: gaominghao
 * @Date: 2020-07-20 10:30:48
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-20 20:26:53
 * @Description: none
 */

const Service = require('egg').Service;
const fs = require('fs');
const path = require('path');

class NewsService extends Service {
  async list (page = 1) {
    let resJson = fs.readFileSync(path.resolve(__dirname, '../public/json/news.json'), 'utf8');
    let res = JSON.parse(resJson)
    return res.data;
  }
}

module.exports = NewsService



