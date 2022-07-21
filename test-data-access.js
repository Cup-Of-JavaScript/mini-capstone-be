const dataAccess = require('./data-access');

const main = async () => {
    let todoListName= 'mynewlist'
    let todoListId= 5
    let r = await dataAccess.newList(todoListId,todoListName)
    console.log(r)
    process.exit()
}

main()