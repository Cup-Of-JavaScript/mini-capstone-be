const dataAccess = require('./data-access');

const main = async () => {
    let r = await dataAccess.getTodolists()
    console.log(r)
    process.exit()
}

main()