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






    // Parsing...
    // const id = req.params['id'];                 // Parse the path params from URL (e.g. /persons/1)
    // const queryParam1 = req.query['personType']  // Parse the query string from URL (e.g. ?personType=manager)
    // const body = req.body;                       // Parse the the body from the request
    
    // Data access & business logic...
    // const result = await dataAccess.<YOUR FUNCTION HERE>
    
    // Response...
    // res.status(404); // 201, 400, 403, etc.
    // res.send(<YOUR OBJECT HERE>);



//
// GET: /test
//

app.get('/test', cors(corsOptions), async (req, res) => { 
    let r = await dataAccess.test();
    res.send(r);
});

//GET:/todolists/{id}/tasks
app.get('/todolists/:id/tasks', cors(corsOptions), async (req, res) => { 
    let todolistId = req.params['id'];
    let result = await dataAccess.getTask(todolistId)
    
    if (result.length > 0) {
        res.send(result);
    } else {
        res.status(204);
        res.end();
    }
});

//GET:/todolists
app.get('/todolists/', cors(corsOptions), async (req, res) => {
    let result = await dataAccess.getTodoLists()
    if (result.length > 0) {
        res.send(result)
    } else {
        res.status(204)
        res.end()

    }
});

app.listen(PORT, () => {
    console.log(`Express API running on port: ${PORT}`);
});
