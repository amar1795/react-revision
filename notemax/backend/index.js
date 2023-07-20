const connecttomongo=require('./db');
const express =require("express");
const app = express()
connecttomongo();
app.use(express.json())

const port = 3001

//available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`)
})