require('dotenv').config();
const version = process.env.VERSION;
const Phone_Number_Id = process.env.PHONE_NUMBER_ID;
const authorization = process.env.FB_AUTHORIZATION;

exports.config = function (method,paylaod) {
  console.log("config function is running");
  return {
    method: `${method}`,
    url: `https://graph.facebook.com/${version}/${Phone_Number_Id}/messages`,
    headers: {
      'Authorization': authorization,
      'Content-Type': 'application/json'
    },
    data: paylaod
  };
};