// import our models for stuff
const Tag = require("./Tag");
const Product = require("./Product");
const ProductTag = require("./ProductTag");
const Category = require("./Category");

//define our relationships
Product.belongsTo(Category);
Category.hasMany(Product);

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

Product.belongsToMany(ProductTag, {
  through: ProductTag,
  foreignKey: "product_id",
});

module.exports = {
  Tag,
  ProductTag,
  Product,
  Category,
};
