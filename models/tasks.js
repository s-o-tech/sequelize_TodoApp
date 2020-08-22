const connection = require('../dbConnect'),
      Sequelize = require('sequelize');


let Tasks = connection.define('tasks',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    message:{
        type:Sequelize.STRING,
        allowNull:false
    },
    percent:{
        type:Sequelize.INTEGER,
        defaultValue:0
    },
    target:{
        type:Sequelize.STRING,
        allowNull:false
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports = Tasks;
