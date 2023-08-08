const router = require('express').Router();

const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

const blogPostRoutes = require('./blogPostRoutes');

router.use('/blogPost', blogPostRoutes)

module.exports = router;