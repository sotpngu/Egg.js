/*
 * @Author: gaominghao
 * @Date: 2020-07-20 15:58:00
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-21 10:59:19
 * @Description: none
 */

const isJSON = require('koa-is-json');
const zlib = require('zlib');

module.exports = options => { // （对中间件进行配置）
  return async function gzip(ctx, next) {
    await next();

    // 后续中间件执行完后将响应体转换成gzip
    let body = ctx.body;
    if (!body) return;

    // console.log(options.threshold)
    // console.log(ctx.length)
    // 支持 options.threshold（对中间件进行配置）
    if (options.threshold && ctx.length < options.threshold) return;

    if (isJSON(body)) body = JSON.stringify(body);

    // 设置 gzip body，修正响应头
    const stream = zlib.createGzip();
    stream.end(body);
    ctx.body = stream;
    ctx.set('Content-Encoding', 'gzip');

  }
}