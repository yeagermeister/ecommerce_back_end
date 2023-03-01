// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne(Category, {

});

// Categories have many Products
Category.hasMany(Product, {

});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: 'ProductTag',
  foreignKey: 'id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'ProductTag',
  foreignKey: 'id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
