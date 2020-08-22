const connection = require('../dbConnect'),
      Sequelize = require('sequelize');

const users = connection.define('users',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    isAdmin:{
        type:Sequelize.BOOLEAN,

    }
},{
    freezeTableName: true,
    timestamps: false
})
module.exports = users;

