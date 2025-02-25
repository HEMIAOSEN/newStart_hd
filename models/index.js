const { Sequelize, DataTypes} = require('sequelize');
const select=require("./select.js")
// 方法 3: 分别传递参数 (其它数据库)//连接数据库使用
const sequelize = new Sequelize('todo_list', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});
//建立表
select(sequelize, DataTypes);

sequelize.sync();
module.exports =sequelize;
