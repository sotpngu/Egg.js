/*
 * @Author: gaominghao
 * @Date: 2020-07-20 19:39:29
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-20 19:50:27
 * @Description: none
 */

exports.index = async ctx => {
  await ctx.render('/form/index.tpl');
}

exports.post = async ctx => {
  ctx.body = `body: ${JSON.stringify(ctx.request.body)}`;
}