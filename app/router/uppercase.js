/*
 * @Author: gaominghao
 * @Date: 2020-07-21 10:28:52
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-21 10:29:12
 * @Description: none
 */

module.exports = app => {
  const {
    router,
    controller,
    middleware
  } = app;
  // 中间件
  router.get('s', '/searchToUpperCase', middleware.uppercase(), controller.search.index)
  // curl http://localhost:7001/searchToUpperCase?name=egg
}