const mssql = require("mssql");
const conactionToDB = require("./connectToDB");
const appPool = conactionToDB.appPool;

//========================================================================

const getUserPassByUname = async (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let myConnectionPoolToDB = await appPool.connect();
      try {
        let results = await myConnectionPoolToDB
          .request()
          .input("username", mssql.VarChar, username)
          .input("password", mssql.VarChar, password)
          .execute("getUserPassByUname");

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

module.exports.getUserPassByUname = getUserPassByUname;

//============================================================================
// get number of order per customer
const whiceOnlineOrderNumberPerId = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let myConnectionPoolToDB = await appPool.connect();
      try {
        let results = await myConnectionPoolToDB
          .request()
          .input("id", mssql.Int, userId)
          .execute("whiceOnlineOrderNumberPerId");

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

module.exports.whiceOnlineOrderNumberPerId = whiceOnlineOrderNumberPerId;
//=================================================================================
// get products per order
const getProdectsPerOrderById = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let myConnectionPoolToDB = await appPool.connect();
      try {
        let results = await myConnectionPoolToDB
          .request()
          .input("id", mssql.Int, id)
          .execute("getProdectsPerOrderById");

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

module.exports.getProdectsPerOrderById = getProdectsPerOrderById;
//=================================================================================
// add new order
const AddNewOrder = async (
  orderSource,
  customerId,
  employeeId,
  orderStatusId,
  brancheId,
  deliveryAreaId
) => {
  return new Promise(async (resolve, reject) => {
    try {
      let myConnectionPoolToDB = await appPool.connect();
      try {
        let results = await myConnectionPoolToDB
          .request()
          .input("orderSource", mssql.VarChar, orderSource)
          .input("customerId", mssql.Int, customerId)
          .input("employeeId", mssql.Int, employeeId)
          .input("orderStatusId", mssql.Int, orderStatusId)
          .input("brancheId", mssql.Int, brancheId)
          .input("deliveryAreaId", mssql.Int, deliveryAreaId || null)
          .execute("AddNewOrder");

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

module.exports.AddNewOrder = AddNewOrder;

//=================================================================================
