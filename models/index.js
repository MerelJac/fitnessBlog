// call each file path 
const User = require('./User');
const BlogPost = require('./BlogPost')

//BlogPosts belongsTo Users
// Users haveMany BlogPosts

User.hasMany(BlogPost, {
    foreignKey: 'user_created'
});

BlogPost.belongsTo(User, {
    foreignKey: 'user_created'
})


module.exports = { User, BlogPost };