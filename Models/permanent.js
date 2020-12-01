var db=require('../dbConnection'); //reference of dbconnection.js file

var permanent={

    getAllpermanent:function(callback){

       return db.query('select * from permanent',callback);
    },

    getAllPermanantAddById:function(id, callback)
    {
     return db.query("select * from permanant where id=?",[id],callback);
    },

    addpermanent:function(permanent,callback){
        
        return db.query("Insert into permanent (id,address_permanent,percity,percountry,perstate,perdistrict,perpin,phone1,phone2,fax_mobile,personal_email) values((select id from basic ORDER BY id DESC LIMIT 1),?,?,?,?,?,?,?,?,?,?)",[permanent.id, permanent.address_permanent, permanent.percity, permanent.percountry, permanent.perstate, permanent.perdistrict, permanent.perpin, permanent.phone1, permanent.phone2, permanent.fax_mobile, permanent.personal_email_id],callback);
    },

    deletepermanent:function(id,callback){

        return db.query('delete from permanent where Id=?',[id],callback);
    },

    updatepermanent:function(id,address_permanent,callback){

        return db.query('update permanent set address_permanent=?, city=?, country=?, state=?, district=?, pin=?, phone1=?, phone2=? fax/mobile=?, personal_email_id=? where  id=?' [permanent.address_permanent, permanent.city, permanent.country, permanent.state, permanent.district, permanent.pin, permanent.phone1, permanent.phone2, permanent.fax/mobile, permanent.personal_email_id],callback);
    }

};

module.exports=permanent;
