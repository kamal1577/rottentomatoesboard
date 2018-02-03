'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define('Comments', {
    name: DataTypes.STRING,
    message: DataTypes.STRING,
    movie_id: DataTypes.INTEGER

  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Comments;
};
