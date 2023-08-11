const { BlogPost } = require('../../models');
const router = require('express').Router();


// // get all blog posts
router.get('/', async (req, res) => {
  const allBlogPosts = await BlogPost.findAll();
  const allPosts = allBlogPosts.map((post) => 
  { return post.get({ plain: true}) });
  console.log('found all blog posts');
  res.json(allPosts)
})

// get one post 
router.get('/:id', async (req, res) => {
  const singleBlogPost = await BlogPost.findByPk(req.params.id);
  console.log('Found single BlogPost');
  res.json(singleBlogPost)
})

// create new post -- SUCCESSFUL
router.post('/', async (req, res) => {
  console.log(req.session)
  let id = req.session.user.id;
  let newPost = {...req.body, user_created: id}
  console.log(newPost)
  await BlogPost.create(newPost)
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

