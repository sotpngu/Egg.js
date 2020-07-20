/*
 * @Author: gaominghao
 * @Date: 2020-07-20 10:47:07
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-07-20 20:36:42
 * @Description: none
 */ 

const moment = require('moment');
moment.locale('zh-cn');

exports.relativeTime = time => moment(new Date(time * 1000)).format('YYYY MMMM Do, h:mm:ss a');