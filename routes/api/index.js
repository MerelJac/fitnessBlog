const router = require('express').Router();

const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

const blogPostRoutes = require('./blogPostRoutes');

router.use('/blogPost', blogPostRoutes)

const commentRoutes = require('./commentRoutes');

router.use('/comment', commentRoutes)

module.exports = router;