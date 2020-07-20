/*
 * @Author: gaominghao
 * @Date: 2020-07-20 10:47:07
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-20 13:45:30
 * @Description: none
 */ 

const moment = require('moment');

exports.relativeTime = time => moment(new Date(time));