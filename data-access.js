//
// File: data-access.js
// Date: 7/15/2022
// Desc: CommonJS module that contains our data access code.
//

const { pool  } = require ('./postgres-pool')

// const TEST = 'select * from test'
const GET_TASK = 
`select 
    tk.task_id,
    tk.task_name,
    s.status_id
from task tk
    join todo_list tl on tl.todo_list_id=tk.todo_list_id
    join status s on s.status_id=tk.status_id
where 
    tl.todo_list_id=$1`
const GET_TODOLISTS = 'select * from todo_list'

//  module.exports.test = async () => {
//     let retval = null;
//     try {
//         let r = await pool.query(TEST);
//         retval = r.rows;
//     } catch (err) {
//         console.error(err);
//     }
//     return retval;
// }

module.exports.getTask = async (todolistId) => {
    let retval = null;
    try {
        let r = await pool.query(GET_TASK, [todolistId]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}

module.exports.getTodoLists = async () => {
    let retval = null;
    try {
       let r = await pool.query(GET_TODOLISTS);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval
}
