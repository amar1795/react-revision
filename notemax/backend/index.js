const connecttomongo=require('./db');
const express =require("express");
const app = express()
connecttomongo();

app.use(express.json())

//using cors for transfering the data from frontend to backend 

var cors = require('cors')
app.use(cors())

const port = 3001

//available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`)
})


module.exports=app;