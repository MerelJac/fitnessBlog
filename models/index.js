// call each file path 
const User = require('./User');
const BlogPost = require('./BlogPost');
const Comments = require('./Comments')

User.hasMany(BlogPost, {
    foreignKey: 'user_created'
});

BlogPost.belongsTo(User, {
    foreignKey: 'user_created'
});

BlogPost.hasMany(Comments, {
    foreignKey: 'post_id'
})

Comments.belongsTo(BlogPost, {
    foreignKey: 'post_id'
});

User.hasMany(Comments, {
    foreignKey: 'user_id'
})

Comments.belongsTo(User, {
    foreignKey: 'user_id'
})


module.exports = { User, BlogPost, Comments };