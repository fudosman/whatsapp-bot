const {StatusCodes} = require('http-status-codes');
const token = "12345";
const {sendPostRequest} = require("./../services/axios");


exports.returnChallenge = (req, res) => {
  try {
    const tesing1 = req.query;

    if(tesing1['hub.verify_token'] !== token){
      console.log("failed again");
      return res.status(StatusCodes.UNAUTHORIZED).json({
        status: "failed",
        message: "you are unauthorized"
      });
    }
    console.log("success");
    const data = tesing1['hub.challenge'];
    console.log(typeof(data));
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

exports.webHook = (req, res) => {

  try {
    const value = req.body.entry[0].changes[0].value;
    const chat = {
      phone_number: value.contacts[0].wa_id,
      display_name: value.contacts[0].profile.name,
      message: value.messages[0].text.body
    };
    console.log(chat);

    // reply the chat
    const payload = {
      'Version': '',
      'User-Access-Token': '',
      'WABA-ID':'',
      'Phone-Number-ID': '',
      'Business-ID': '',
      'Recipient-Phone-Number': '',
      'Media-ID': '',
      'Media-URL': '',
    };

    const reply = {
      response: [
        {
          type: 'text',
          message: ['Hello, this is a test message']
        }
      ]
    };

    return res.status(StatusCodes.OK).json(reply);
    
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "error_message": error.message
    });
  }
};



