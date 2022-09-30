require('dotenv').config();

import * as functions from "firebase-functions";

exports.login = functions

  .https.onCall((data) => {
    data = data.data;
    if (!data.password) return false;
    if (data.password !== process.env.PASSWORD) return false;

    return true;
  }

);
