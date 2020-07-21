/*
 * @Author: gaominghao
 * @Date: 2020-07-21 10:31:32
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-21 10:32:11
 * @Description: none
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  // 内部重定向
  router.redirect('/redirect1', '/news', 302);
  // 外部重定向
  router.get('/redirect2', controller.redirect.innerRedirect)
  // curl http://localhost:7001/redirect2?type=bing&q=node.js
  // curl http://localhost:7001/redirect2?q=node.js
}
