const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    productid: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'productid',
      },
    },
    tagid: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tag',
          key: 'tagid',
        },
      },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
