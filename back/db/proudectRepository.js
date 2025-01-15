const mssql = require("mssql");
const conactionToDB = require("./connectToDB");
const appPool = conactionToDB.appPool;

//spgetAllProdects
const getAllProdects = async (req, id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let myConnectionPoolToDB = await appPool.connect();
      try {
        let results = await myConnectionPoolToDB
          .request()
          //   .input("StartDate", sql.DateTime, value)
          //   .input("EndDate", sql.DateTime, value)
          // .output('output_parameter', sql.VarChar(50))
          .execute("getAllProdects");

        console.log(results);
        resolve(results);
      } catch (err) {
        console.log("there was an error while sending query to DB ", err);
        reject(err);
      }
    } catch (err) {
      console.error("ERROR CONNECTION TO DB: ", err);
      reject("ERROR CONNECTION TO DB: ", err);
    }
  });
};

module.exports.getAllProdects = getAllProdects;

//=======================================================================

//getAllBranches
const getAllBranches = async (req, id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let myConnectionPoolToDB = await appPool.connect();
      try {
        let results = await myConnectionPoolToDB
          .request()
          //   .input("StartDate", sql.DateTime, value)
          //   .input("EndDate", sql.DateTime, value)
          // .output('output_parameter', sql.VarChar(50))
          .execute("getAllBranches");

        console.log(results);
        resolve(results);
      } catch (err) {
        console.log("there was an error while sending query to DB ", err);
        reject(err);
      }
    } catch (err) {
      console.error("ERROR CONNECTION TO DB: ", err);
      reject("ERROR CONNECTION TO DB: ", err);
    }
  });
};

module.exports.getAllBranches = getAllBranches;

//===================================================================

//AddNewCustomer using fetch
const AddNewCustomer = async (
  customerName,
  phoneNo,
  address,
  email,
  username,
  password
) => {
  return new Promise(async (resolve, reject) => {
    try {
      let myConnectionPoolToDB = await appPool.connect();
      try {
        let results = await myConnectionPoolToDB
          .request()
          .input("customerName", mssql.VarChar, customerName)
          .input("phoneNo", mssql.VarChar, phoneNo)
          .input("address", mssql.VarChar, address)
          .input("email", mssql.VarChar, email)
          .input("username", mssql.VarChar, username)
          .input("password", mssql.VarChar, password)
          // .output('output_parameter', sql.VarChar(50))
          .execute("AddNewCustomer");

        console.log(results);
        resolve(results);
      } catch (err) {
        console.log("there was an error while sending query to DB ", err);
        reject(err);
      }
    } catch (err) {
      console.error("ERROR CONNECTION TO DB: ", err);
      reject("ERROR CONNECTION TO DB: ", err);
    }
  });
};

module.exports.AddNewCustomer = AddNewCustomer;

//=================================================================
//deliveryArea table
//getAllBranches
const getAllDeliveryArea = async (req, id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let myConnectionPoolToDB = await appPool.connect();
      try {
        let results = await myConnectionPoolToDB
          .request()
          //   .input("StartDate", sql.DateTime, value)
          //   .input("EndDate", sql.DateTime, value)
          // .output('output_parameter', sql.VarChar(50))
          .execute("getAllDeliveryArea");

        console.log(results);
        resolve(results);
      } catch (err) {
        console.log("there was an error while sending query to DB ", err);
        reject(err);
      }
    } catch (err) {
      console.error("ERROR CONNECTION TO DB: ", err);
      reject("ERROR CONNECTION TO DB: ", err);
    }
  });
};

module.exports.getAllDeliveryArea = getAllDeliveryArea;

//===================================================================
