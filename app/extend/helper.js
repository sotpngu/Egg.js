/*
 * @Author: gaominghao
 * @Date: 2020-07-20 10:47:07
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-20 10:48:27
 * @Description: none
 */ 

const moment = require('moment');

exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();