// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'categoryid',
  onDelete: 'CASCADE'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'categoryid',
  onDelete: 'CASCADE'
});



// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: 'product_tag',
  foreignKey: 'tagid'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'product_tag',
  foreignKey: 'productid'

});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
