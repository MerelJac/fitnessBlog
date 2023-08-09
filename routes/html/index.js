const router = require('express').Router();
const { BlogPost } = require('../../models')

const blogPostRoutes = require('./blogPostRoutes');
const pageRoutes = require('./pages')
router.use('/blogPost', blogPostRoutes);
router.use('/' , pageRoutes)


module.exports = router;