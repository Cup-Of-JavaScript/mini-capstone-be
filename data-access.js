//
// File: data-access.js
// Date: 7/15/2022
// Desc: CommonJS module that contains our data access code.
//

const { pool  } = require ('./postgres-pool')

const TEST = 'select * from test'

 module.exports.test = async () => {
    let retval = null;
    try {
        let r = await pool.query(TEST);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}

///todolist/{id}/tasks
const CREATE_TASK = 'INSERT INTO task (task_name, todo_list_id) VALUES ($1, $2) RETURNING task_id;'

 module.exports.createTask = async (taskName, todoListId) => {
    let retval = null;
    try {
        let r = await pool.query(CREATE_TASK, [taskName, todoListId]);
        retval = r.rows[0];
    } catch (err) {
        console.error(err);
    }
    return retval;
}

