const express = require('express')
require('dotenv').config()
var cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const connectBD = require('./db_config');
//router api
const ProviderRoutes = require('./routes/testRouter');
app.use('/api/v1/',ProviderRoutes);
let port= process.env.port_api || 3000

const start = async() => {
    try {
        await connectBD
    // db connection
    app.listen(port, () => console.log(`Live on : http://localhost:${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
