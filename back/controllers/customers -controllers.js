const customerRepository = require("../db/customerRepository");
// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // מאפשר גישה לדברים מהספריה
const jwtKey = "my_seceret_key"; // "salt"
// const jwtExpiryTimeInMilliSeconds = 60 * 1000 * 15; // 15 min
const jwtExpiryTimeInMilliSeconds = 60 * 1000 * 0.25; //

// function myCheckUserPasswordService(username, password) {
//   if (!username || !password || username != password) {
//     return false;
//   }
//   return true;
// }

// const getUserPassByUname = async (req, res) => {
//   try {
//     let x = await customerRepository.getUserPassByUname(
//       req.body.username,
//       req.body.password
//     );
//     res.json(x); // Ensures JSON response
//   } catch (error) {
//     res.status(500).json({ error: "An error occurred" });
//   }
// };
// module.exports.getUserPassByUname = getUserPassByUname;

//====================================================================================
const getUserPassByUname = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check username and password against the database
    const user = await customerRepository.getUserPassByUname(
      username,
      password
    );

    if (user.recordset.length === 0) {
      // Invalid credentials
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Create JWT token
    const token = jwt.sign({ username }, jwtKey, {
      algorithm: "HS256",
      expiresIn: jwtExpiryTimeInMilliSeconds / 1000, // Convert to seconds
    });

    console.log("JWT Token Created:", token);

    // Set the token in cookies and send the response
    // res.cookie("myToken", token, {
    //   maxAge: jwtExpiryTimeInMilliSeconds,
    //   httpOnly: false,
    //   sameSite: "None",
    // });

    // res.json({ message: "Login successful", token });
    res.json({ user, token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports.getUserPassByUname = getUserPassByUname;

//====================================================================================

//פונקציה שתפקידה כל זמן שהיוזר עדיין פעיל מול השרת לרפרש לו
const refresh = (req, res) => {
  console.log("refresh - going to try to refresh the token");
  // myStatusCode will not send to the client, it's for us to check the status
  // of the token (if it's expired, or if it's invalid)
  // and decide whether to send a new token or not to the client.
  // כל מצב סטטוס יחזור למידלוואר, למשתנה X
  let myStatusCode = 200;
  // const theToken = req.cookies.myToken; // שליפה מתוך הקוקיז את התוקן הרלוונטי בעזרת הספריה
  const theToken = req.body.theToken;
  // if there is no "myToken" in the cookies
  if (!theToken) {
    console.log('refresh - couldnt find "myToken" in the cookies');
    myStatusCode = 401;
    return myStatusCode; // 401 - היוזר לא מורשה
  }
  // once we got here it means we have cookie named "myToken"
  //  let's make sure it actually also contains VALID content
  //   (make sure the jwt wasn't "played with")
  let payload;
  try {
    //פונקציה שקוראת את התוכן ויודעת להגיד אם התוקן מזוייף או לא, אנחנו נותנים לה את התוקן ואת המילד הסודית
    // ואם התוכן בסדר אז יהיה בתוך מהשתנה את התוכן שהטמנו - שם המשתמש
    payload = jwt.verify(theToken, jwtKey);
  } catch (e) {
    // במידה והיה זיוף של התוקן אז הספריה תשלח את השגיאה הנ"ל
    if (e instanceof jwt.JsonWebTokenError) {
      console.log("refresh - JsonWebTokenError", e);
      myStatusCode = 401;
      return myStatusCode;
    }
    // לכאן זה יגיע אם יש שגיאה כלשהי בהכנסת הנתונים
    myStatusCode = 400;
    return myStatusCode; // 400
  }

  // Once we got here, it means,
  // 1) There was a cookie named myToken
  // 2) it was valid (we checked the jwt validity above)
  //  let's refresh (extend the expiry time - pnly the time is change from the lsat token)
  const newToken = jwt.sign({ username: payload.username }, jwtKey, {
    algorithm: "HS256",
    expiresIn: jwtExpiryTimeInMilliSeconds,
  });

  // lets add a new cookie with our jwt to send to our client
  console.log("The new refreshed token: ", newToken);
  res.cookie("myToken", newToken, { maxAge: jwtExpiryTimeInMilliSeconds });
  // מעמיסים על הרספונס שדה חדש ומעבירים לה את המידע  על התוקן, וככה אפשר להעביר למידלווארים הבאים בתור את המידע
  res.thePayload = payload;
  return myStatusCode; // returning 200
};

module.exports.refresh = refresh;

//================================================================

//================================================================
// const secretPage = (req, res) => {
//   console.log("secretPage - myStatusCode=", res.myStatusCode);
//   if (res.myStatusCode === 200) {
//     res.send(`Secret Page welcomes you,
//                     ${res.thePayload.username}!!
//                     ${JSON.stringify(res.thePayload)}`);
//   } else {
//     res.status(res.myStatusCode).send(); // אנחנו שולחים לקליינט את מה שיש בסטטוס קוד
//   }
// };

const HowManyOnlineOrdersPerCustomer = async (req, res) => {
  if (res.myStatusCode === 200) {
    let x = await customerRepository.whiceOnlineOrderNumberPerId(
      req.params.userId
    );
    res.json(x);
  } else {
    res.status(res.myStatusCode).send(); // אנחנו שולחים לקליינט את מה שיש בסטטוס קוד
  }
};
module.exports.HowManyOnlineOrdersPerCustomer = HowManyOnlineOrdersPerCustomer;

//====================================================================================
const getProdectsPerOrderById = async (req, res) => {
  let x = await customerRepository.getProdectsPerOrderById(req.params.orderId);
  res.json(x);
};
module.exports.getProdectsPerOrderById = getProdectsPerOrderById;

//====================================================================================
// add new orders
const AddNewOrder = async (req, res) => {
  let x = await customerRepository.AddNewOrder(
    req.body.orderSource,
    req.body.customerId,
    req.body.employeeId,
    req.body.orderStatusId,
    req.body.brancheId,
    req.body.deliveryAreaId
  );
  res.json(x);
};
module.exports.AddNewOrder = AddNewOrder;
