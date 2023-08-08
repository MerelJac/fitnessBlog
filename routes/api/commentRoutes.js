const { Comments } = require('../../models');
const router = require('express').Router();

// get all comments -- successful
router.get('/', async (req, res) => {
    const allComments = await Comments.findAll();
    console.log('Found all comments');
    res.json(allComments);
})

// get one comment - successful 
router.get('/:id', async (req, res) => {
  const singleComments = await Comments.findByPk(req.params.id);
  console.log('Found single Comments');
  res.json(singleComments)
})

// // create new post -- not yet working
// router.post('/', async (req, res) => {
//   console.log(req.body)
//   const newBlogPost = await BlogPost.create(req.body)
//   console.log('Created new BlogPost');
//   res.status(200).json('BlogPost created', newBlogPost)
//   res.status(400).json(error)
// });

// router.delete('/:id', async (req, res) => {
//   await BlogPost.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//   console.log('BlogPost deleted');
//   res.json(`BlogPost Deleted`)
// })


// router.put('/:id', async (req, res) => {
//   const updatePost = await BlogPost.update({
//     title: req.body.title,
//     text: req.body.text
//   }, {
//     where: {
//       id: req.params.id
//     }
//   })
//   console.log('updated');
//   res.json(updatePost)
// })

module.exports = router;