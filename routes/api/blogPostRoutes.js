const { BlogPost } = require('../../models');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const allBlogPosts = await BlogPost.findAll();
    console.log('Found all Blog Posts');
    res.json(allBlogPosts);
})

module.exports = router;