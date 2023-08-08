const sequelize = require('../connections/connections');
// import models
const { User, BlogPost, Comments } = require('../models');

const userData = [
    { first_name: 'Merel', last_name: 'Jac', email: 'mimibanini@gmail.com', password: 'helloKitty',
    }
];

const blogPostData = [
    { title: 'Gym Rat', text: 'We love to run on the wheel', user_created: '2'}
];

const commentData = [
    { user_id: '2', post_id: '1', text: 'Testing comment'}
]

  async function seedDatabase() {
    try {
        await User.bulkCreate(userData);

        await BlogPost.bulkCreate(blogPostData);

        await Comments.bulkCreate(commentData);

        console.log(`Seed database successfully created.`)
    } catch(err) {
        console.error(`Error sending seed: ${err}`)
    }
  };

  seedDatabase();