// Import necessary modules and initialize the router
const router = require('express').Router();
const { User } = require('../../models')

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

// create new user -- not yet working
router.post('/', async (req, res) => {
  console.log(req.body)
  const newUser = await User.create(req.body)
  console.log('Created new user');
  res.json('user created', newUser)
  res.status(400).json(error)
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


// update User info
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
// Add more routes and handlers as needed...

// Export the router
module.exports = router;

