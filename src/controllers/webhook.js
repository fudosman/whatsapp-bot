const {
  StatusCodes
} = require('http-status-codes');
const {
  config
} = require("../utils/utils");
const {
  markMessageAsRead,
  send_Text_Message,
  send_preview_url_message,
  send_image_by_ID,
  send_image_by_URL
} = require("../services/message");
const {
  extractMessageType
} = require("../utils/extractMessage");


exports.webHook = async (req, res) => {
  let DATA = await extractMessageType(req);
  let message_type = DATA.message_type;

  // text handlers
  if(message_type === "text"){
    console.log("text");
    // let read = await markMessageAsRead(DATA);
    // let sent = await send_Text_Message(DATA, "hey guys");
    let sent = await send_preview_url_message(DATA, "https://www.google.com is the banger of the internet");
    // let sent = await send_image_by_ID(DATA, "569816751363082");
    // let sent = await send_image_by_URL(DATA, "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png");
    console.log(sent);
  }
  // image handlers
  if(message_type === "image"){
    console.log("image");
  }
  // audio handlers
  if(message_type === "audio"){
    console.log("audio");
  }
  // document handlers
  if(message_type === "document"){
    console.log("document");
  }

  // sticker handlers 
  if(message_type === "sticker"){
    console.log("sticker");
  }

  // video handlers
  if(message_type === "video"){
    console.log("video");
  }

  // contacts handlers 
  if(message_type === "contacts"){
    console.log("contacts");
  }

  // location handlers
  if(message_type === "location"){
    console.log("location");
  }

  // template
  if(message_type === "template"){
    console.log("template");
  }

  // interactive handlers
  if(message_type === "interactive"){
    console.log("interactive");
  }

  
  // button handlers
  if(message_type === "button"){
    console.log("button");
  }
  
  // unknown handlers
  if(message_type === "unknown"){
    console.log("unknown");
  } 

  // unsupported handlers
  if(message_type === "unsupported"){
    console.log("unsupported");
  }

  // system handlers
  if(message_type === "system"){
    console.log("system message");
  }
  

};