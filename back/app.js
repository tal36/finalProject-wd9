const { refresh } = require("./controllers/customers -controllers");
var express = require("express");
var app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const cookieParser = require("cookie-parser");
app.use(cookieParser());
// const corsOptions = {
//   origin: "http://localhost:3002", // The exact URL of your React app
//   credentials: true, // Allow credentials (cookies) to be sent
// };

// app.use(cors(corsOptions)); // Apply the customized CORS settings

app.use((req, res, next) => {
  console.log("inside middleware, going to call refresh");
  let x = refresh(req, res);
  res.myStatusCode = x;
  next();
});

// app.use(express.urlencoded({ extended: true }));

//Getting all the products to Product copmanent
const router = require("./routes/products-routes");
app.use("/products", router);

const customerRouter = require("./routes/customers-routes");
app.use("/customers", customerRouter);

//===========================================================
// Serve static files to the client - כל בקשה תופנה לתיקייה הרלוונטית
// app.use("/images", express.static("public/images")); // יהיה רלוונטי רק אם התיקיית פבליק תהיה יותר מסועפת

app.use(express.static("public")); // כל הקבצים הציבוריים שניגים אליהם יהיה בתיקיית פבליק
//=========================
app.listen(3001, function () {
  console.log("My app is listening on port 3001!");
});

//------------------------------------------------------------------
// app.get("/hello", (req, res) => {
//   res.send({
//     msg: "hello world",
//   });
// });

//------------------------------------------------------------------

// //------------------------------------------------------------------
// app.post("/login", (req, res) => {
//   let theResponseObj = {};
//   if (req.body.email === "johndoe" && req.body.password === "1234") {
//     theResponseObj.name = "john";
//     theResponseObj.isLoginDetailsCorrect = true;
//   } else {
//     theResponseObj.name = "NA";
//     theResponseObj.isLoginDetailsCorrect = false;
//   }
//   res.send(theResponseObj);
// });
//------------------------------------------------------------------
