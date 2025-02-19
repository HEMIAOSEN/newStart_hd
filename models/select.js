module.exports = (sequelize, DataTypes) => {
return sequelize.define('select', {
    // 在这里定义模型属性
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cast: {
      type: DataTypes.STRING
      // allowNull 默认为 true
    }
  });
}



