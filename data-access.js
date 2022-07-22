//
// File: data-access.js
// Date: 7/22/2022
// Desc: CommonJS module that contains our data access code.
//

const { pool  } = require ('./postgres-pool')

const TEST = 'select * from test'
const GET_TASK = 'select task_id, task_name as name, status_id from task where todo_list_id=$1'
const GET_TODOLISTS = 'select todo_list_id, todo_list_name as name from todo_list'
const DELETE_TODOLIST_IN_TASK='delete from task where todo_list_id = $1'
const DELETE_TODOLIST = 'delete from todo_list where todo_list_id = $1 ;'
const CREATE_TODOLIST = 'INSERT INTO todo_list (todo_list_name) VALUES ($1) returning todo_list_id, todo_list_name as name;'
const CREATE_TASK = 'INSERT INTO task (task_name, todo_list_id, status_id) VALUES ($1, $2, 1) RETURNING task_id, task_name;'
const PUT_UPDATE_STATUS = 'update task set status_id = $1 where task_id = $2 returning status_id;'

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

module.exports.getTasks = async (todolistId) => {
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

module.exports.deleteTodoListInTask = async(todolistId) =>{
    let retval = null;
    try {
      let r = await pool.query(DELETE_TODOLIST_IN_TASK, [todolistId]);
      retval = r.rows;
    } catch (err) {
      console.error(err);
    }
    return retval;
}

module.exports.deleteTodoList = async(todolistId) =>{
    let retval = null;
    try {
      let r = await pool.query(DELETE_TODOLIST, [todolistId]);
      retval = r.rows;
    } catch (err) {
      console.error(err);
    }
    return retval;
}

module.exports.newTodolist = async (name) => {
    let retval = null;
     try {
       let r = await pool.query(CREATE_TODOLIST, [name]);
       retval = r.rows;
     } catch (err) {
       console.error(err);
     }
     return retval;
};

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

module.exports.putUpdateTask = async (statusId, taskId) => {
    let retval = null;
    try {
        let r = await pool.query(PUT_UPDATE_STATUS, [statusId, taskId]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}
