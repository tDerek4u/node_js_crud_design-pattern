
const express = require('express')
const connectToDatabase = require('../database/connection');
const stockRouter = require('../routes/stock-route');
const app = express()
const cors = require('cors');
const port = 5000

app.use(cors());
connectToDatabase();
app.use(express.json());

app.get('/yoshika', (req, res) => {
  res.send('Hello World!')
})
app.use((err,req,res,next) => {
  console.log(err);
    res.status(500).json({ code : 500, message : err.message });
})

app.use('/api/v1', stockRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

