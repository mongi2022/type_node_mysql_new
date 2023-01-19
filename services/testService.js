const db = require('../db_config');

//Creation of test
const CreateTestService = (name,email) =>{

    let rqAddTest = `INSERT INTO testTable(name,email)     VALUES ('${name}','${email}')`;
    
    return new Promise ((resolve, reject)=>{
        db.query(rqAddTest, (err, result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
}
//Get all tests
const getAllTestService = () =>{

    let rqAllTest = `select * from testTable`;
    
    return new Promise ((resolve, reject)=>{
        db.query(rqAllTest, (err, result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
}

//Update of test
  const UpdateTestService = (id,name,email) =>{

    let rqUpdateTest = `update testTable set name='${name}',email ='${email}'  where id=${id}`
  
    return new Promise ((resolve, reject)=>{
        db.query(rqUpdateTest, (err, result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
}

//delete of test
const DeleteTestService = (id) =>{
  let rqUpdateTest = `delete from testTable where id='${id}'`

  return new Promise ((resolve, reject)=>{
      db.query(rqUpdateTest, (err, result)=>{
          if(err){
              reject(err);
          }
          else{
              resolve(result);
          }
      })
  })
}

 //search  test by id
const SearchTestByIdService = (id) =>{
    let rqTest = `select *  from testTable where id='${id}'`
  
    return new Promise ((resolve, reject)=>{
        db.query(rqTest, (err, result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
  }





 

module.exports={CreateTestService,getAllTestService,UpdateTestService,DeleteTestService,SearchTestByIdService}
