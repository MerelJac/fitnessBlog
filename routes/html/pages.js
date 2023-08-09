const router = require('express').Router();
const { BlogPost } = require('../../models')


// get all posts for homepage
router.get('/', async (req, res) => {
    try {
      const allBlogPosts = await BlogPost.findAll();
      const allPosts = allBlogPosts.map((post) => 
      { return post.get({ plain: true}) });
      res.render('launch', {
        allPosts,
        // loggedIn: req.sesion.loggedIn
      });
    
      } catch (err) {
        console.log(err);
        res.status(500).json({message: err})
      }
  })

// link to create new post handlebars
router.get('/create', (req, res) => {
  res.render('create')
})


module.exports = router;