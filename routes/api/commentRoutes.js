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

// get comments from users -- successful
router.get('/user/:id', async (req, res) => {
    const commentsFromUser = await Comments.findAll({
        where: { user_id: req.params.id }
    })
    console.log('Found user`s comments');
    res.json(commentsFromUser)
  })

// get comments from post
router.get('/blogPost/:id', async (req, res) => {
    const commentsFromPost = await Comments.findAll({
        where: { post_id: req.params.id }
    })
    console.log('Found all comments for single post');
    res.json(commentsFromPost)
  })

// create new comment -- SUCCESSFUL
router.post('/', async (req, res) => {
  console.log(req.body)
  // user ID and post ID passed in from post 
  const newComment = await Comments.create(req.body)
  console.log('Created new Comment');
  res.status(200).json(newComment)
});

// delete comment -- Successful 
router.delete('/:id', async (req, res) => {
    const deleteComment = await Comments.destroy({where: {
        id: req.params.id
    }})
    console.log("Comment Deleted");
    res.json('Comment deleted')
})


module.exports = router;