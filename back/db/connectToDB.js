const mssql = require("mssql");
const dotenv = require("dotenv");
dotenv.config();

const sqlConfig = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  server: process.env.SERVER, //Server to connect to. You can use 'localhost\instance' to connect to named instance.
  port: 1433, //Port to connect to (default: 1433). Don't set when connecting to named instance.
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false, // for azure use true
    trustServerCertificate: true, // use true for local dev / self-signed certs
  },
};
const appPool = new mssql.ConnectionPool(sqlConfig);

module.exports.appPool = appPool;
