//
// File: test-data-access.js
// Desc: Simple driver to test our data access layer.
//

const dataAccess = require("./data-access");

const main = async () => {
  let statusId = 1
  let taskId = 55
  let r = await dataAccess.getTodoList(11)
  console.log(r);
  process.exit();
};

main();
