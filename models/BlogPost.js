const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connections/connections')

class BlogPost extends Model {}

BlogPost.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE
    },
    user_created: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogPost'
});

module.exports = BlogPost;