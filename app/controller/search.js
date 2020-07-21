/*
 * @Author: gaominghao
 * @Date: 2020-07-20 16:43:27
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-20 16:44:28
 * @Description: none
 */ 

 exports.index = async ctx => {
  ctx.body = `search: ${ctx.query.name}`
 }
