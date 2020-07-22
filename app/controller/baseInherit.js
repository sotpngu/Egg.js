/*
 * @Author: your name
 * @Date: 2020-07-22 00:03:16
 * @LastEditTime: 2020-07-23 00:17:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Egg.js\app\controller\baseInherit.js
 */ 

 const Controller = require("../core/base_controller");

 class baseInheritController extends Controller {
     async list() {
         const posts = {
            name: 'zhangsan',
            age: 18
         }
         this.success(posts); // 编写应用的 Controller 时，可以继承 BaseController，直接使用基类上的方法：
     }
 }

 module.exports = baseInheritController;