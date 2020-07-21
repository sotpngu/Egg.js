/*
 * @Author: gaominghao
 * @Date: 2020-07-20 16:46:44
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-21 09:39:14
 * @Description: none
 */

// 获取post请求参数
exports.info = async ctx => {
  ctx.body = `user: ${ctx.params.id}, ${ctx.params.name}`;
}

// 表单校验
const createRule = {
  username: {
    type: 'email'
  },
  password: {
    type: 'password',
    compare: 're-password'
  }
}
exports.infoPost = async ctx => {
  ctx.validate(createRule);
  ctx.body = ctx.request.body;
}
// curl -X POST http://127.0.0.1:7001/user --data 'username=abc@abc.com&password=111111&re-password=111111'
