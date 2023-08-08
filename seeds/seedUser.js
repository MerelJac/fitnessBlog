const { User } = require('../models');

const userData = [
    {
        first_name: 'Merel',
        last_name: 'Jac',
        email: 'mimibanini@gmail.com',
        password: 'helloKitty',

    }
]

const seedUser = () => 
    User.bulkCreate(userData);

module.exports = seedUser;