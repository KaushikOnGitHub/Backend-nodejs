var express=require('express');
var router=express.Router();
var experience=require('../Models/experience');


router.get('/',function(req,res,next){

    experience.getAllexperience(function(err,rows){
 
     if(err){
         res.json(err);
     }
     else{
         res.json(rows); 
     } 
 
  });

});

router.get('/:id?', function(req, res, next) {

    basic.getAllexperienceById(req.params.id, function(err, rows)
    {  
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
    
    }); 


router.post('/',function(req,res,next){

    experience.addexperience(req.body, function(err,rows){
        
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.delete('/:id', function (req, res, next) {

    experience.deleteexperience(req.params.id, function (err, rows){

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.put('/:id', function (req, res, next) {

    experience.updateexperience(req.params.id, req.body, function (err, rows){

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


module.exports=experience;
