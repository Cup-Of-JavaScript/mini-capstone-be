//
// File: test-data-access.js
// Desc: Simple driver to test our data access layer.
//

const dataAccess = require("./data-access");

const main = async () => {
    let statusId= 1
    let taskId=51
    let r = await dataAccess.putUpdateTask(statusId, taskId)
  console.log(r);
  process.exit();
};

main();
