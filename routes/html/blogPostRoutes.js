const { BlogPost } = require('../../models');
const router = require('express').Router();

router.get('/:id', async (req, res) => {
  try {
    const singlePost = await BlogPost.findByPk(req.params.id);
    const post = await singlePost.get({ plain: true});
    console.log(post)
    await res.render('singlePost', {
      post
      // loggedIn: req.sesion.loggedIn
    });
  
    } catch (err) {
      console.log(err);
      res.status(500).json({message: err})
    }
})
module.exports = router;

