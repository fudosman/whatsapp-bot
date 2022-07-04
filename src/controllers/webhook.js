const {
  StatusCodes
} = require('http-status-codes');
const {message_is_read} = require("../services/axios");
require('dotenv').config();
const version = process.env.VERSION;
const Phone_Number_Id = process.env.PHONE_NUMBER_ID;
const authorization = process.env.FB_AUTHORIZATION;


function config (method,data){
  return {
    method: `${method}`,
    url: `https://graph.facebook.com/${version}/${Phone_Number_Id}/messages`,
    headers: {
      'Authorization': authorization,
      'Content-Type': 'application/json'
    },
    data: data
  };
}

exports.webHook = async (req, res) => {
  console.log(req.body);

  const message = {
    messaging_product: 'whatsapp',
    recipient_type: "individual",
    to: `${req.body.entry[0].changes[0].value.metadata.phone_number_id}`,
    type: req.body.entry[0].changes[0].value.messages[0].type
  };

  // MARK AS READ WITH A PUT REQUEST
  if (message.type === "text") {
    const data = {
      "messaging_product": "whatsapp",
      "status": "read",
      "message_id": req.body.entry[0].changes[0].value.messages[0].id
    };
    const isRead = await message_is_read(config("post",data));
    if(isRead.success){
      // make an introduction of your bot
      // open an function for interaction with the user
    }
    
  }
};