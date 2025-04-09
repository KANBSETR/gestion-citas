import pg from "pg";


export const pool = new pg.Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASS,
    database: process.env.PGDB,
    port: process.env.PGPORT
})

pool.on('connect', () => {
    console.log('connected to the db');
});