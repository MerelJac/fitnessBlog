const router = require('express').Router();
const { BlogPost, User, Comments } = require('../../models')


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

//get single post 
router.get('/post/:id', async (req, res) => {
  try {
    const singleBlogPost = await BlogPost.findByPk(req.params.id);
    const singlePostData = singleBlogPost.get({ plain: true});
    console.log(singlePostData)
    console.log('Found single BlogPost');
    res.render('singlePost', {singlePostData, user: req.session.user})
  } catch (err) {
    console.error(err)
  }
})

//login page 
router.get('/login', (req, res) => {
  res.render('login')
})

// find your user
router.get('/profile', async (req, res) => {
if (req.session.user) {
  try {

    const myPosts = await BlogPost.findAll({
      where: {
        user_created: req.session.user.id
        }
      })

      let posts = await myPosts.map((posts) => {
        return posts.get({ plain: true})
      })

    const myComments = await Comments.findAll({
      where: {
        user_id: req.session.user.id
      }, include: BlogPost
    })

    let comments = await myComments.map((comment) => {
      return comment.get({ plain: true })
    })

    console.log(comments)

    res.render('profile', { posts, comments, user: req.session.user, loggedIn: req.session.loggedIn })
    // const yourPosts = await BlogPost.findByPk
  }
  catch (err) {
    console.error(`An error occured ${err}`)
  }
} else {
  res.render('/')
}

} 
)

module.exports = router;