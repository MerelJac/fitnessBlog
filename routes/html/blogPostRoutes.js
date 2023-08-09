const { BlogPost } = require('../../models');
const router = require('express').Router();

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

// // get all blog posts
// router.get('/', async (req, res) => {
//   const allBlogPosts = await BlogPost.findAll();
//   console.log('found all blog posts');
//   res.json(allBlogPosts)
// })

// get one post 
router.get('/:id', async (req, res) => {
  const singleBlogPost = await BlogPost.findByPk(req.params.id);
  console.log('Found single BlogPost');
  res.json(singleBlogPost)
})

// create new post -- SUCCESSFUL
router.post('/', async (req, res) => {
  await BlogPost.create(req.body)
  console.log('Created new BlogPost');
  res.status(200).json('BlogPost created')
});

// delete BlogPost SUCCESSFUL
router.delete('/:id', async (req, res) => {
  await BlogPost.destroy({
    where: {
      id: req.params.id
    }
  })
  console.log('BlogPost deleted');
  res.json(`BlogPost Deleted`)
})

// update post =  successful
router.put('/:id', async (req, res) => {
  const updatePost = await BlogPost.update({
    title: req.body.title,
    text: req.body.text
  }, {
    where: {
      id: req.params.id
    }
  })
  console.log('updated');
  res.json(updatePost)
})

module.exports = router;

