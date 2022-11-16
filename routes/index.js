const router = require('express').Router();
const apiRoutes = require('.api');


router.use('/api', apiRoutes);
// router.use('/categories', categoryRoutes);
// router.use('/products', productRoutes);
// router.use('/tags', tagRoutes);

module.exports = router;