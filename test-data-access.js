//
// File: test-data-access.js
// Desc: Simple driver to test our data access layer.
//

const dataAccess = require("./data-access");

const main = async () => {
    let statusId= 2
    let taskId=29
    let r = await dataAccess.putUpdateTable(statusId, taskId)
  console.log(r);
  process.exit();
};

main();
