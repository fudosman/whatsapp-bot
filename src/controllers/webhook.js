const {
  StatusCodes
} = require('http-status-codes');
const {config} = require("../utils/utils");
const {markMessageAsRead, send_Text_Message} = require("../services/message");


exports.webHook = async (req, res) => {
  console.log(req.body);

  let message = {
    to: req.body.entry[0].changes[0].value.contacts[0].wa_id,
    name: req.body.entry[0].changes[0].value.contacts[0].profile.name,
    type: req.body.entry[0].changes[0].value.messages[0].type,
    message: req.body.entry[0].changes[0].value.messages[0].text.body, 
    message_id:req.body.entry[0].changes[0].value.messages[0].id,
  };
  console.log(message.to);

  // MARK AS READ WITH A PUT REQUEST
  if (message.type === "text") {
    markMessageAsRead(message);
    let is_this_a_link = false;
    let custom_message = ` 
    Welcome *${message.name}*,\n
    _Please select an option below_
    1. View Popular Fragrances
    2. View Executive Fragrances
    3. View Masculine Fragrances
    4. View Feminine Fragrances
    5. enter a product code to redeem a discount
    6. view your cart
    7. Exit
    `;
    send_Text_Message(message,custom_message,is_this_a_link);

  }
};