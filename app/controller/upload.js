/*
 * @Author: gaominghao
 * @Date: 2020-07-24 15:54:14
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-24 16:14:10
 * @Description: none
 */ 
const Controller = require('egg').Controller;
const path = require('path');
const fs = require('mz/fs');

class uploadController extends Controller {
  // 上传文件页面
  async uploadFiles () {
    const { ctx } = this;
    await ctx.render('upload/uploadFiles.tpl');
  }

  // 接受文件
  async upload () {
    const { ctx } = this;
    const file = ctx.request.files[0];
    
    const name = 'egg-multipart-test/' + path.basename(file.filename);
    let result;
    console.log(name)
    console.log(file.filepath)
    try {
      result = await ctx.oss.put(name, file.filepath);
    } finally {
      await fs.unlink(file.filepath);
    }

    ctx.body = {
      url: result.url,
      requestBody: ctx.request.body,
    }
  }
}

module.exports = uploadController;