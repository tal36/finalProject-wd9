const repository = require("../db/proudectRepository");

//GET REQUEST - get ALL PRODUCTS
const getAllProdects = async (req, res) => {
  try {
    let x = await repository.getAllProdects();
    res.json(x); // Ensures JSON response
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
module.exports.getAllProdects = getAllProdects;

//============================================================================
//getAllBranches
const getAllBranches = async (req, res) => {
  try {
    let x = await repository.getAllBranches();
    res.json(x); // Ensures JSON response
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
module.exports.getAllBranches = getAllBranches;
//================================================================

//AddNewCustomer
const AddNewCustomer = async (req, res) => {
  let x = await repository.AddNewCustomer(
    req.body.customerName,
    req.body.phoneNo,
    req.body.address,
    req.body.email,
    req.body.username,
    req.body.password
  );
  res.json(x);
};
module.exports.AddNewCustomer = AddNewCustomer;

//================================================================
//getAllDeliveryArea
const getAllDeliveryArea = async (req, res) => {
  try {
    let x = await repository.getAllDeliveryArea();
    res.json(x); // Ensures JSON response
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
module.exports.getAllDeliveryArea = getAllDeliveryArea;

//================================================================
