const {
  handlePostRequests
} = require("../services/axios");
const {
  config
} = require("../utils/utils");
const {
  mark_message_as_read_payload,
  text_message_payload,
  previewURL_message_payload,
  image_message_payload_by_ID,
  image_message_payload_by_URL
} = require("../utils/message_payloads");


//////////////////////////////////////////////////

// functions associated with messaging 

//////////////////////////////////////////////////

exports.markMessageAsRead = async (message) => {
  let payload = mark_message_as_read_payload();
  payload.message_id = message.message_id;
  // console.log(payload);

  const send_config = config("post", payload);
  const isRead = await handlePostRequests(send_config);
  if (!isRead) {
    return {
      status: "failed",
      message: "failed to mark message as read"
    };
  } else {
    return {
      status: "success",
      message: "message marked as read"
    };
  }
};


exports.send_Text_Message = async (message,add_message) => {
  const payload = text_message_payload();
  payload.to = message.message_from;
  payload.text.body = add_message;

  console.log(payload);  
  const send_config = config("post", payload);
  const isSent = await handlePostRequests(send_config);
  if (!isSent) {
    return {
      status: "failed",
      message: "failed to send message"
    };
  } else {
    return {
      status: "success",
      message: `message sent to ${message.profile_name} with phone number ${message.message_from}`,
      in_response_to: message.message_text_body 
    };
  }
};

exports.send_preview_url_message = async (message, url_and_message) => {
  const payload = previewURL_message_payload();
  payload.to = message.message_from;
  payload.text.body = url_and_message;
  console.log(payload);

  const send_config = config("post", payload);
  const isSent = await handlePostRequests(send_config);
  if (!isSent) {
    return {
      status: "failed",
      message: "failed to send url preview message"
    };
  } else {
    return {
      status: "success",
      message: `message sent to ${message.profile_name} with phone number ${message.message_from}`,
      in_response_to: message.message_text_body 
    };
  }
};


exports.send_image_by_ID = async (message, image_id) => {
  const payload = image_message_payload_by_ID();
  payload.to = message.message_from;
  payload.image.id = image_id;
  console.log(payload);

  const send_config = config("post", payload);
  const isSent = await handlePostRequests(send_config);
  if (!isSent) {
    return {
      status: "failed",
      message: "failed to send image"
    };
  } else {
    return {
      status: "success",
      message: `image sent to ${message.profile_name} with phone number +${message.message_from}`,
      in_response_to: message.message_text_body 
    };
  }
}
exports.send_image_by_URL = async (message, image_URL) => {
  const payload = image_message_payload_by_URL();
  payload.to = message.message_from;
  payload.image.link = image_URL;
  payload.image.mime_type = "image/jpeg/png";
  console.log(payload);

  const send_config = config("post", payload);
  const isSent = await handlePostRequests(send_config);
  if (!isSent) {
    return {
      status: "failed",
      message: "failed to send image"
    };
  } else {
    return {
      status: "success",
      message: `image as URL, sent to ${message.profile_name} with phone number +${message.message_from}`,
      in_response_to: message.message_text_body 
    };
  }
}
