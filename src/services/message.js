const {handlePostRequests} = require("../services/axios");
const {config} = require("../utils/utils");


//////////////////////////////////////////////////

// functions associated with messaging 

//////////////////////////////////////////////////

exports.markMessageAsRead = async (message) => {
  const paylaod = {
    "messaging_product": "whatsapp",
    "status": "read",
    "message_id": message.message_id
  };
  const send_config = config("post",paylaod);
  const isRead = await handlePostRequests(send_config);
  if (!isRead){
    return{
      status : "failed",
      message: "failed to mark message as read"
    };
  }else{
    return{
      status: "success",
      message: "message marked as read"
    };
  }
};


exports.send_Text_Message = async (message,custom_message,is_this_a_link) => {
  const paylaod = {
    "messaging_product": "whatsapp",
    "preview_url": `${is_this_a_link}`,
    "recipient_type": "individual",
    "to": `${message.to}`,
    "type": "text",
    "text": {
        "body": `${custom_message}`
    }
  };
  const send_config = config("post",paylaod);
  const isRead = await handlePostRequests(send_config);
  return isRead;
};