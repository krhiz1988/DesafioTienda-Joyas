const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "root",
    database: "joyas",
    port: 5432,
    allowExitOnIdle: true
});

module.exports = pool