const sequelize = require('../connections/connections');
const seedUser = require('./seedUser');

const seedAll = async () => {
    // false in dev stage
    await sequelize.sync({ force: false });

    seedUser;

    process.exit(0)
};

seedAll()

