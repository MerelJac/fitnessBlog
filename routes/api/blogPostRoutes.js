const { BlogPost } = require('../../models');
const router = require('express').Router();

router.get('/', async (req, res) => {
    const allBlogPosts = await BlogPost.findAll();
    console.log('Found all Blog Posts');
    res.json(allBlogPosts);
})

// get one post 
router.get('/:id', async (req, res) => {
  const singleBlogPost = await BlogPost.findByPk(req.params.id);
  console.log('Found single BlogPost');
  res.json(singleBlogPost)
})

// create new post -- not yet working
router.post('/', async (req, res) => {
  console.log(req.body)
  const newBlogPost = await BlogPost.create(req.body)
  console.log('Created new BlogPost');
  res.status(200).json('BlogPost created', newBlogPost)
  res.status(400).json(error)
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

// successful
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

