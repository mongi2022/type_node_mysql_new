//import services
const {
    CreateTestService,
    getAllTestService,
    UpdateTestService,
    DeleteTestService,
    SearchTestByIdService
} = require("../services/testService");

  
  //create test controller
  const CreateTestController = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
  ////
    res.send(
      await CreateTestService(
        name,
        email,
        
      )
        .then((response) => {
          return `Test ${name} added successfully`;
        })
        .catch((err) => {
          return console.log(`Error: ${err}`);
        })
    );
  };
  
  //get all Test controller
  const getAllTestController = async (req, res) => {
    res.send(
      await getAllTestService()
        .then((response) => {
          return response;
        })
        .catch((err) => {
          return console.log(`Error: ${err}`);
        })
    );
  };
  
  /** */
  //update Test controller
  const UpdateTestController = (id = async (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
  
  
    res.send(
      await UpdateTestService(
        id,
        name,
        email,

      )
        .then((response) => {
          return `Test ${name} updated successfully`;
        })
        .catch((err) => {
          return console.log(`Error: ${err}`);
        })
    );
  });
  
  //delete Test controller
  const DeleteTestController = async (req, res) => {
    const id = req.params.id;
  
    res.send(
      await DeleteTestService(id)
        .then((response) => {
          return `Test ${id} deleted successfully`;
        })
        .catch((err) => {
          return console.log(`Error: ${err}`);
        })
    );
  };
  

  
  
  
  //Search Test by id controller
  const SearchTestByIdController = async (req, res)=>{
      const id =req.params.id
      
  
      res.send(await SearchTestByIdService(id).then(
          Test => {
  
              return {
                  Test
                  }
  
          }
      )
      .catch(err =>{
          return console.log(`Error: ${err}`)
      }));
  }
  
  
  
  
    
  module.exports = {
    CreateTestController,
    getAllTestController,
    UpdateTestController,
    DeleteTestController,
    SearchTestByIdController
  };
  
  