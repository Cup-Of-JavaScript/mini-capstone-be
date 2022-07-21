//
// File: data-access.js
// Date: 7/15/2022
// Desc: CommonJS module that contains our data access code.
//

const { pool  } = require ('./postgres-pool')

//const GET_TODO_LISTS= 'select * from todo_list'
const NEW_LIST= 'INSERT INTO todo_list (todo_list_id,todo_list_name) VALUES ($1,$2) returning todo_list_id,todo_list_name'

exports.getTodolists = async () => {
    let retval = null;
    try {
        let r = await pool.query(GET_TODO_LISTS);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}
exports.newList = async (todoListId,todoListName) => {
    let retval = null;
    try {
        let r = await pool.query(NEW_LIST, [todoListId,todoListName]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}