var db=require('../dbConnection'); //reference of dbconnection.js file

var basic={

    getAllbasic:function(callback){

       return db.query("select * from basic;",callback);
    },

    getAllbasicById:function(id, callback)
    {
     return db.query("select * from basic where id=?",[id],callback);
    },


    addbasic:function(basic,callback){
        return db.query("Insert into basic (Employee_no,Title,Addressed_as,First_Name,Middle_Name,Last_Name,Initials,user_gender,dob,Employee_Age,Official_Phone,Personal_Mobile,Fax,Official_Email,Personal_Email,Personal_Email_2,Personal_Email_3,bank_name,account_type,payment_type,account_no,branch_details,ifsc_code,reimbursement_bank_name,reimbursement_acc_no,birth_place,religion,caste,domicile,nationality,voter_id,pan_no,aadhaar_no,maritial_status,no_of_status,marriage_date) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[
            basic.Employee_no,
            basic.Title, 
            basic.Addressed_as,
            basic.First_Name, 
            basic.Middle_Name, 
            basic.Last_Name,
            basic.Initials,
            basic.user_gender,
            basic.dob, 
            basic.Employee_Age,
            basic.Official_Phone,
            basic.Personal_Mobile,
            basic.Fax,
            basic.Official_Email,
            basic.Personal_Email, 
            basic.Personal_Email_2, 
            basic.Personal_Email_3,
            basic.bank_name,
            basic.account_type,
            basic.payment_type,
            basic.account_no,
            basic.branch_details,
            basic.ifsc_code, 
            basic.reimbursement_bank_name,
            basic.reimbursement_acc_no,
            basic.birth_place,
            basic.religion,
            basic.caste,
            basic.domicile,
            basic.nationality,
            basic.voter_id,
            basic.pan_no,
            basic.aadhaar_no,
            basic.maritial_status,
            basic.no_of_status,
            basic.marriage_date ],callback);
    },

    deletebasic:function(id,callback){
        return db.query('delete from basic where Id=?',[id],callback);
    },
    
    updatebasic:function(id,basic
        ,callback){
        return db.query('update basic set Title=?, Addressed_as=?, First_Name=?, Middle_Name=?, Last_Name=?, Initials=?, user_gender=?, dob=?, Employee_Age=?, Official_Phone=?, Personal_Mobile=?, Fax=?, Official_Email=?, Personal_Email=?, Personal_Email_2=?, Personal_Email_3=?, bank_name=?, account_type=?, payment_type=?, account_no=?, branch_details=?, ifsc_code=?, reimbursement_bank_name=?, reimbursement_acc_no=?, birth_place=?, religion=?, caste=?, domicile=?, nationality=?, voter_id=?, pan_no=?, aadhaar_no=?, maritial_status=?, no_of_status=?, marriage_date=? where id=?',[basic.Title, basic.Addressed_as, basic.First_Name, basic.First_Name, basic.Last_Name, basic.Initials, basic.user_gender, basic.dob, basic.Official_Phone, basic.Personal_Mobile, basic.Fax, basic.Official_Email, basic.Personal_Email_2, basic.Personal_Email_3, basic.bank_name, basic.account_type, basic.payment_type, basic.account_no, basic.branch_details, basic.ifsc_code, basic.reimbursement_bank_name, basic.reimbursement_acc_no, basic.birth_place, basic.religion, basic.caste, basic.domicile, basic.nationality, basic.voter_id, basic.pan_no, basic.aadhaar_no, basic.maritial_status, basic.no_of_status, basic.marriage_date ,id],callback);
    }

};

module.exports=basic;



