/*
 * @Author: gaominghao
 * @Date: 2020-07-20 13:58:11
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-20 14:01:26
 * @Description: none
 */ 

const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/middleware/robot.test.js', () => {
  it('should block robot', () => {
    return app.httpRequest()
      .get('/')
      .set('User-Agent', "Baiduspider")
      .expect(403);
  })
})