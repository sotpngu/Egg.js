/*
 * @Author: gaominghao
 * @Date: 2020-07-20 19:33:52
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-20 19:35:24
 * @Description: none
 */

exports.detail = async ctx => {
  ctx.body = `package: ${ctx.params[0]}`;
};