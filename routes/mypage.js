let express = require('express'),
    router = express.Router(),
    Tasks = require('../models/tasks');

router.get('/', function(req, res, next) {
  if(req.isAuthenticated()){
    let target = req.user.id;
    Tasks.findAll({
        raw:true,
        where:{target:target}
    })
    .then(function(result){
        let tasks = Object.values(JSON.parse(JSON.stringify(result))),
            username = req.user.username,
            isAdmin = req.user.isAdmin;
        res.render('mypage',{'title':'mypage','tasks':tasks,'username':username,isAuth:req.isAuthenticated(),isAdmin:isAdmin});
    })
    .catch(function(err){
        console.error(err);
        res.render('mypage',{title:'Error',isAuth:req.isAuthenticated()});
    });
    
  }
  else{
    res.redirect('login');
  }
});

router.post('/', function(req,res,next){
  if(req.isAuthenticated() && req.body.target == req.user.id){
        let per = req.body.newPercent,
            taskID = req.body.taskID;
        Tasks.update({percent:per},{where:{id:taskID}})
        .then(function(result){
            res.redirect('ok');
        })
        .catch(function(err){
            console.error(err);
            res.render('mypage',{title:'mypage',message:`Error`,isAuth:req.isAuthenticated()});
            
        });
  }
  else{
      res.status(404);
      res.end('not found')
  }
  
});


module.exports = router;
