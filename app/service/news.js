/*
 * @Author: gaominghao
 * @Date: 2020-07-20 10:30:48
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-20 13:47:39
 * @Description: none
 */

const Service = require('egg').Service;

class NewsService extends Service {
  async list (page = 1) {
    // read config
    const { serverUrl, pageSize } = this.config.news;

    // use build-in http client to GET hacker-news api
    const res = await this.ctx.curl(`${serverUrl}/top/song?type=7`, {
      data: {
        orderBy: '"$key"',
        startAt: `"${pageSize * (page - 1)}"`,
        endAt: `"${pageSize * page - 1}"`
      },
      dataType: 'json'
    });
    return res.data.data;

    // parallel GET detail
    // const newsList = await Promise.all(
    //   Object.keys(idList).map(key => {
    //     const url = `${serverUrl}/item/${idList[key]}.json`;
    //     return this.ctx.curl(url, {
    //       dataType: 'json'
    //     })
    //   })
    // );
    // return newsList.map(res => {
    //   return res.data
    // });
  }
}

module.exports = NewsService



