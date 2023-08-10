// call each file path 
const User = require('./User');
const BlogPost = require('./BlogPost');
const Comments = require('./Comments')

User.hasMany(BlogPost, {
    foreignKey: 'user_created'
});

BlogPost.belongsToMany(User, {
    foreignKey: 'user_created',
    onDelete: 'CASCADE'
});

BlogPost.hasMany(Comments, {
    foreignKey: 'post_id'
})

Comments.belongsTo(BlogPost, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comments, {
    foreignKey: 'user_id'
})

Comments.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})


module.exports = { User, BlogPost, Comments };