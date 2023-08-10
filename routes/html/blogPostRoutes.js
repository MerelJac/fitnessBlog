const { BlogPost } = require('../../models');
const router = require('express').Router();

router.get('/:id', async (req, res) => {
  try {
    const singlePost = await BlogPost.findByPk(req.params.id);
    const post = await singlePost.get({ plain: true});
    console.log(post)
    res.render('singlePost', post);
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err)
    }
})

module.exports = router;

