const { BlogPost } = require('../../models');
const { Comments } = require('../../models');


const router = require('express').Router();

router.get('/:id', async (req, res) => {
  try {

    const singlePost = await BlogPost.findByPk(req.params.id);
    const post = await singlePost.get({ plain: true});

    const allCommentsForPost = await Comments.findAll({
      where: {post_id: req.params.id}})
    console.log(allCommentsForPost)
    const comments = await allCommentsForPost.map((comment) => {
      return comment.get({ plain: true })
    })

    console.log(comments)
    console.log(post)

    res.render('singlePost', {post, comments, loggedIn: req.session.loggedIn, user: req.session.user} );

    // sessions = successful
    req.session.postId = req.params.id;
    req.session.save((err) => {
      if (err) {
        console.error('Error saving session:', err);
      }
    });
    
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err)
    }
})

module.exports = router;

