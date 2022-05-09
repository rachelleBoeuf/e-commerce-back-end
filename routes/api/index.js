const tagRoutes = require('./tag-routes');
const productRoutes = require('./product-routes');
const router = require('express').Router();
const categoryRoutes = require('./category-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
