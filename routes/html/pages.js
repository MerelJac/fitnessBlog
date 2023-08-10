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
        loggedIn: req.session.loggedIn
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

router.get('/post/:id', async (req, res) => {
  try {
    const singleBlogPost = await BlogPost.findByPk(req.params.id);
    const singlePostData = singleBlogPost.get({ plain: true});
    console.log(singlePostData)
    console.log('Found single BlogPost');
    res.render('singlePost', singlePostData)
  } catch (err) {
    console.error(err)
  }
})

//login page 
router.get('/login', (req, res) => {
  res.render('login')
})

module.exports = router;