/*
 * @Author: gaominghao
 * @Date: 2020-07-17 14:33:38
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-21 09:41:55
 * @Description: none
 */ 
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};

module.exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

module.exports.validate = {
  enable: true,
  package: 'egg-validate',
};
