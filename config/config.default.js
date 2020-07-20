/*
 * @Author: gaominghao
 * @Date: 2020-07-17 14:33:38
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-20 19:53:51
 * @Description: none
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1594967612362_2475';

  // 页面模板配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
    },
  };

  // 添加 news 的配置项
  config.news = {
    pageSize: 5,
    serverUrl: 'http://localhost:3000',
  };

  // 中间件
  // 中间件通用配置：
  //  enable：控制中间件是否开启。
  //  match：设置只有符合某些规则的请求才会经过这个中间件。
  //  ignore：设置符合某些规则的请求不经过这个中间件。
  config.middleware = [
    'robot', // 检查是否是百度爬虫请求
    'gzip', //把请求体打包成压缩包 
  ];
  // 中间件配置文件
  // robot's configurations
  config.robot = {
    ua: [
      /Baiduspider/i,
    ]
  };
  // 配置 gzip 中间件的配置
  config.gzip = {
    threshold: 1024, // 小于 1k 的响应体不压缩
  };

  // 关闭post请求安全
  config.security = {
    csrf: {
      enable: false
    }
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};