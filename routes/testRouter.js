
const {    CreateTestController,
    getAllTestController,
    UpdateTestController,
    DeleteTestController,
    SearchTestByIdController} = require('../controllers/testController')
const ProviderRoutes = require('express').Router()

//crud Test
//get all Tests
ProviderRoutes.get('/tests',getAllTestController)
//Create Test
ProviderRoutes.post('/addtest',CreateTestController)
//update Test
ProviderRoutes.patch('/uptest/:id',UpdateTestController)
//delete Test
ProviderRoutes.delete('/deltest/:id',DeleteTestController)
//-----------------------------------------------------

//-----------------------------------------------------
//search test by Test id
ProviderRoutes.get('/vtest/:id',SearchTestByIdController)


//export route module to index file
module.exports = ProviderRoutes