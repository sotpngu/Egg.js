/*
 * @Author: gaominghao
 * @Date: 2020-07-21 10:33:58
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-21 10:34:46
 * @Description: none
 */

module.exports = app => {
  const {
    router,
    controller
  } = app;
  /* 
   * router
   */
  // Query String 方式
  router.get('/search', controller.search.index);
  // 参数命名方式
  router.get('/user/:id/:name', controller.user.info);
  // 复杂参数的获取：路由里面也支持定义正则，可以更加灵活的获取参数：
  router.get(/^\/package\/([\w-.]+\/[\w-.]+)$/, controller.package.detail);
  // curl http://127.0.0.1:7001/package/egg/1.0.0
  // 表单内容获取
  router.get('/formIndex', controller.form.index)
  router.post('/form', controller.form.post);
  // curl -X POST http://127.0.0.1:7001/form --data '{"name":"controller"}' --header 'Content-Type:application/json'
  // 表单校验
  router.post('/user', controller.user.infoPost);
  // curl -X POST http://127.0.0.1:7001/user --data 'username=abc@abc.com&password=111111&re-password=111111'
}