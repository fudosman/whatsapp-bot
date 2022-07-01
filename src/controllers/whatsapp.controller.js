const {
  StatusCodes
} = require('http-status-codes');
const {
  async
} = require('jshint/src/prod-params');
const token = "12345";
const axios = require('axios');


exports.returnChallenge = (req, res) => {
  try {
    const tesing1 = req.query;

    if (tesing1['hub.verify_token'] !== token) {
      console.log("failed again");
      return res.status(StatusCodes.UNAUTHORIZED).json({
        status: "failed",
        message: "you are unauthorized"
      });
    }
    console.log("success");
    const data = tesing1['hub.challenge'];
    console.log(typeof (data));
    // convert data into an interger
    const dataInt = parseInt(data);
    return res.json(dataInt);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "error_message": error.message
    });
  }
};

exports.webHook = async (req, res) => {
  try {
    console.log({
      parameters: req.params,
      query: req.query,
      whatsapp_id: req.body.entry[0].id,
      display_phone_number: req.body.entry[0].changes[0].value.metadata.display_phone_number,
      phone_number: req.body.entry[0].changes[0].value.contacts[0].wa_id,
      phone_number_id: req.body.entry[0].changes[0].value.metadata.phone_number_id,
      profile_name: req.body.entry[0].changes[0].value.contacts[0].profile.name,
      messaging_from: req.body.entry[0].changes[0].value.messaging_product,
      contacts: req.body.entry[0].changes[0].value.contacts[0],
      text_messages: req.body.entry[0].changes[0].value.messages[0].text.body,
      messages_type: req.body.entry[0].changes[0].value.messages[0].type,
      message_info: req.body.entry[0].changes[0].value.messages[0],
      status: req.body.entry[0].changes[0].value.statuses,
      continued: req.body.entry[0].changes[0].value,
    });

    const value = req.body.entry[0].changes[0].value;
    const chat = {
      phone_number: value.contacts[0].wa_id,
      display_name: value.contacts[0].profile.name,
      message: value.messages[0].text.body
    };
    // console.log(chat);


  } catch (error) {
    // console.log(error.message);
    // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    //   "status": "error",
    //   "error_message": error.message
    // });
  }
};