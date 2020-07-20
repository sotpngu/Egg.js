/*
 * @Author: gaominghao
 * @Date: 2020-07-20 10:50:56
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-20 11:10:39
 * @Description: none
 */

module.exports = (options, app) => {
  return async function robotMiddleware (ctx, next) {
    const source = ctx.get('user-agent') || '';
    const match = options.ua.some(ua => ua.test(source));
    if (match) {
      ctx.status = 403;
      ctx.message = "Go away, robot";
    } else {
      await next();
    }
   }
}
