// Import necessary modules and initialize the router
const router = require('express').Router();
const { User } = require('../../models')

// log in
router.post('/login', async (req, res) => {
    try {
      const dbUserData = await User.findOne({
        where: {
          email: req.body.email,
        },
        attributes: {
          exclude: ["password"]
        }
      });
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      if (!dbUserData.password == req.body.password) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }

      console.log(dbUserData.id)
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user = dbUserData;
        console.log(
          'File: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
          req.session.cookie
        );
  
        res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
})

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Define routes and handlers for '/users' SUCCESSFUL
router.get('/', async (req, res) => {
  // Implementation for handling GET request to /api/users
  const allUsers = await User.findAll();
  console.log('Found all users');
  res.json(allUsers)
});

// get one user SUCCESSFUL
router.get('/:id', async (req, res) => {

  const singleUser = await User.findByPk(req.params.id);
  console.log('Found single User');
  res.json(singleUser)
})

// create new user -- SUCCESSFUL
router.post('/', async (req, res) => {

  let newUser = await User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password
  })

  newUser = await User.findOne({
    where: {
      id: newUser.id
    }, 
      attributes: {
      exclude: ["password"]
    }
  })


  req.session.save(() => {
    req.session.loggedIn = true;
    req.session.user = newUser;
    console.log(
      'File: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
      req.session.cookie
    );


    res.status(200).json({ user: newUser, message: 'You are now logged in!' });
  });

});

// delete user SUCCESSFUL
router.delete('/:id', async (req, res) => {
  await User.destroy({
    where: {
      id: req.params.id
    }
  })
  console.log('User deleted');
  res.json(`User Deleted`)
})

// update User info - SUCCESSFUL
router.put('/:id', async (req, res) => {
  await User.update({
    email: req.body.email,
    password: req.body.password
  }, {
    where: {
      id: req.params.id
    }
  })
  console.log('User info updated');

  res.json('User info updated')
})

// Export the router
module.exports = router;

