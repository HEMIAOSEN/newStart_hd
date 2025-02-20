module.exports = (sequelize, DataTypes) => {
return sequelize.define('select', {
    // 在这里定义模型属性
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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



