var express=require('express'),
    app=express();


    app.get('/',function(req,res){
      res.sendfile(__dirname+'/client/partials/index.html');
    });
    app.get('/index.html',function(req,res){
      res.sendfile(__dirname+'/client/partials/index.html');
    });
    app.get('/about.html',function(req,res){
      res.sendfile(__dirname+'/client/partials/about.html');
    });
    app.get('/post.html',function(req,res){
      res.sendfile(__dirname+'/client/partials/post.html');
    });
    app.get('/contact.html',function(req,res){
      res.sendfile(__dirname+'/client/partials/contact.html');
    });
    app.use(express.static('client'));
    app.listen(3000,function(){
      console.log("I am listening...");
    })
