let express = require('express'),
    router = express.Router(),
    Users = require('../models/users'),
    Tasks = require('../models/tasks');

router.get('/',function(req,res,next){
    if(req.isAuthenticated() && req.user.isAdmin){
        Users.findAll({row:true}).then(function(results){
            res.render('createTask',{'title':"Create Task",'users':results,isAuth:req.isAuthenticated()});
        })
        .catch(function(err){
            res.render('createTask',{title:'Error'});
        });
    }
    else{
        res.status(404);
        res.end('not found');
    }
});

router.post('/', function(req,res,next){
    if(req.isAuthenticated() && req.user.isAdmin){
        let title = req.body.title,
            message = req.body.message,
            targetID = req.body.target,
            data = {
                id:0,
                title:title,
                message:message,
                target:targetID,
            };
        Tasks.create(data)
        .then(function(result){
            res.redirect('ok');
        })
        .catch(function(err){
            console.error(err);
            res.render('createTask',{title:`Error`,isAuth:req.isAuthenticated()});
        });
    }
    else{
        res.status(404);
        res.end('not found')
    }
    
}
);
module.exports = router;
