// 
// File: api.js
// Auth: 
// Date: 6/30/2022
// Desc: Todo List Express API.
//

const cors = require('cors');
const express = require('express');
const dataAccess = require('./data-access');

const PORT = 5152;
const app = express();

let corsOptions = {
    origin: ['http://localhost:3001', 'http://localhost:3000'],
    optionsSuccessStatus: 200
}

// Middleware...
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

//
// POST: /todolists/{id}/tasks
//


app.post('/todolists/', cors(corsOptions), async (req,res) => {
    let result = await dataAccess.getTodolists()
    if (result){
     console.log(200)
     res.send(result)
    }else{
      res.status(204)
      res.end()
    }
});
app.listen(PORT, () => {
    console.log(`Express API running on port: ${PORT}`);
});
