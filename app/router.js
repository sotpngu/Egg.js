/*
 * @Author: gaominghao
 * @Date: 2020-07-17 14:33:38
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-21 10:35:25
 * @Description: none
 */ 
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  // 该事件一个 worker 进程只会触发一次，在 HTTP 服务完成启动后，会将 HTTP server 通过这个事件暴露出来给开发者。
  app.once('server', server => {
    //  websocket
    console.log('完成启动：', Object.keys(server));
  });

  // 运行时有任何的异常被 onerror 插件捕获后，都会触发 error 事件，将错误对象和关联的上下文（如果有）暴露给开发者，可以进行自定义的日志记录上报等处理。
  app.on('error', (err, ctx) => {
    // report error
    console.log('发生错误：', err);
    // 记录错误日志
    app.logger.error(new Error(err));
  });

  // 应用收到请求和响应请求时，分别会触发 request 和 response 事件，并将当前请求上下文暴露出来，开发者可以监听这两个事件来进行日志记录。
  app.on('request', ctx => {
    // log receive request
    if (ctx.url === '/favicon.ico') {
      ctx.respond = false; // 为了绕过 Koa 的内置 response 处理，你可以显式设置 ctx.respond = false;。 如果您想要写入原始的 res 对象而不是让 Koa 处理你的 response，请使用此参数。
    }
  });
  app.on('response', ctx => {
    // ctx.starttime is set by framework
    console.log('请求地址：', ctx.url);
    const used = Date.now() - ctx.starttime;
    console.log('请求返回耗时：', used);
    // log total cost
  });

  const { router, controller, middleware } = app;
  // home
  router.get('/', controller.home.index);
  // news
  router.get('/news', controller.news.list);
  // 分模块
  require('./router/request')(app);
  require('./router/redirect')(app);
  require('./router/uppercase')(app);
  
};
