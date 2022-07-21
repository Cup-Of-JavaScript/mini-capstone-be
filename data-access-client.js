//
// File: test-data-access.js
// Desc: Simple driver to test our data access layer.
//

const dataAccess = require('./data-access.js');


const main = async () => {
    let taskName = 'Testing'
    let  todoListId = 1
    
    let r = await dataAccess.createTask(taskName, todoListId);
    console.log(r)
    process.exit()
}
main()
