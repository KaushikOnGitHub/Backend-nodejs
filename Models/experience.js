var db=require('../dbConnection'); //reference of dbconnection.js file

var experience={

    getAllexperience:function(callback){

        return db.query('select * from experience;',callback);
    },

    getAllexperienceById:function(id, callback)
    {
     return db.query("select * from experience where id=?",[id],callback);
    },


    addexperience:function(experience,callback){

        return db.query("Insert into experience (id,from_date,to_date,organisation,experience) values((select id from basic ORDER BY id DESC LIMIT 1),?,?,?,?)",[
            experience.id, experience.from_date, experience.to_date, experience.organisation, experience.experience ],callback);
    },
    
    deleteexperience:function(id,callback){

        return db.query('delete from experience where Id=?',[id],callback);
    },

    updateexperience:function(id, from_date ,callback){

        return db.query('update experience set from_date=?, to_date=?, organisation=?, experience=?, where id=?',[ experience.from_date, experience.to_date, experience.organisation, experience.experience ,id],callback);
    }
    
};    

 
module.exports=experience;

    

