/*
 * @Author: gaominghao
 * @Date: 2020-07-21 10:15:29
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-21 10:16:53
 * @Description: none
 */

module.exports = () => {
  return async function uppercase(ctx, next) {
    ctx.query.name = ctx.query.name && ctx.query.name.toUpperCase();
    await next();
  }
}