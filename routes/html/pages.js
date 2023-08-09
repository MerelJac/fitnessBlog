const router = require('express').Router();
const { BlogPost } = require('../../models')


// get all posts for homepage
router.get('/', async (req, res) => {
    try {
      const allBlogPosts = await BlogPost.findAll();
      const allPosts = allBlogPosts.map((post) => 
      { return post.get({ plain: true}) });
      console.log(allPosts)
      res.render('launch', {
        allPosts,
        // loggedIn: req.sesion.loggedIn
      });
    
      } catch (err) {
        console.log(err);
        res.status(500).json({message: err})
      }
  })


module.exports = router;