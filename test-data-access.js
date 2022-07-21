//
// File: test-data-access.js
// Desc: Simple driver to test our data access layer.
//

const dataAccess = require("./data-access");

const main = async () => {
    let todolistId = 8
    let todolistName = 'Monday night'
let r = await dataAccess.newTodolist(todolistId, todolistName);
  console.log(r);
  process.exit();
};

main();
