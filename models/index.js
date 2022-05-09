// import our models for stuff
const Tag = require("./Tag");
const Product = require("./Product");
const ProductTag = require("./ProductTag");
const Category = require("./Category");

//define our relationships
Product.belongsTo(Category);
Category.hasMany(Product);

Product.belongsToMany(ProductTag, { through: ProductTag });
Tag.belongsToMany(Product, { through: ProductTag });

module.exports = {
  Tag,
  ProductTag,
  Product,
  Category,
};
