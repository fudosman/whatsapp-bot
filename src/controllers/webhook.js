const {
  StatusCodes
} = require('http-status-codes');
const {config} = require("../utils/utils");
const {markMessageAsRead, send_Text_Message} = require("../services/message");
const {extractMessageType} = require("../utils/extractMessage");


exports.webHook = async (req, res) => {
 let message = await extractMessageType(req);
  
};