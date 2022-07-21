//
// File: data-access.js
// Date: 7/15/2022
// Desc: CommonJS module that contains our data access code.
//

const { pool  } = require ('./postgres-pool')

const GET_TODOLISTS = 'select * from todo_list'
const PUT_UPDATESTATUS = 'update task set status_id = $1 where task_id = $2 returning status_id;'
const PUT_UPDATETABLE = 'select tk.task_id, tk.task_name, tk.status_id, s.status_name from task tk join status s on tk.status_id = s.status_id where tk.task_id = $1;'

 module.exports.getTodoLists = async () => {
    let retval = null;
    try {
        let r = await pool.query(GET_TODOLISTS);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}
 module.exports.putUpdateTask = async (statusId,taskId) => {
    let retval = null;
    try {
        let r = await pool.query(PUT_UPDATESTATUS, [statusId, taskId]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}

module.exports.putUpdateTable = async (statusId,taskId) => {
    let retval = null;
    try {
        let r = await pool.query(PUT_UPDATETABLE, [taskId]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}

