# Todo List Express API
Express API for Todo List React web application.

# Getting Starting
- Clone this repo
- Install the dependencies: `npm install`
- Create `postgres-pool.js` file (replace xxx):

```
const { Pool } = require("pg");

exports.pool = new Pool({
    user: "postgres",
    password: "xxx",
    database: "xxx",
    host: "xxx",
    port: 5432,
  });
```

- Start the API: `node api.js`
- API runs on port 5152
- NOTE: Switch to release branch: `git checkout release`
- Try test endpoint: `GET http://localhost:5152/test`

# Updates
- Stop the API: `Ctl+C`
- Get latest updates from release branch: `git pull origin release`
- Start the API: `node api.js`

# API Docs
- Documetation is located [here](./docs/readme.md)
