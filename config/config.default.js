/*
 * @Author: gaominghao
 * @Date: 2020-07-17 14:33:38
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-20 11:05:15
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
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  // add middleware robot
  config.middleware = [
    'robot'
  ];
  // robot's configurations
  config.robot = {
    ua: [
      /Baiduspider/i,
    ]
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};