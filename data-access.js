//
// File: data-access.js
// Date: 7/15/2022
// Desc: CommonJS module that contains our data access code.
//

const { pool  } = require ('./postgres-pool')

const GET_TODOLISTS = 'select * from todo_list'

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

