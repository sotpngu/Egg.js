/*
 * @Author: gaominghao
 * @Date: 2020-07-21 10:00:23
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-21 10:12:01
 * @Description: none
 */

exports.innerRedirect = async ctx => {
  const type = ctx.query.type;
  const q = ctx.query.q || 'node.js';

  if (type === 'bing') {
    ctx.redirect(`http://cn.bing.com/search?q=${q}`);
  } else {
    ctx.redirect(`https://www.baidu.com/s?ie=UTF-8&wd=${q}`);
  }
 }
