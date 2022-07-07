exports.text_message_payload = () => {
  return {
    "messaging_product": "whatsapp",
    "preview_url": false,
    "recipient_type": "individual",
    "to": "{{Recipient-Phone-Number}}",
    "type": "text",
    "text": {
      "body": "text-message-content"
    }
  };
};

exports.previewURL_message_payload = () => {
  return {
    "messaging_product": "whatsapp",
    "to": "{{Recipient-Phone-Number}}",
    "text": {
      "preview_url": true,
      "body": "Please visit https://youtu.be/hpltvTEiRrY to inspire your day!"
    }
  };
};

exports.image_message_payload_by_ID = () => {
  return {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "{{Recipient-Phone-Number}}",
    "type": "image",
    "image": {
      "id": "<image-object-id>"
    }
  };
};


exports.image_message_payload_by_URL = () => {
  return {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "{{Recipient-Phone-Number}}",
    "type": "image",
    "image": {
      "link": "http(s)://image-url"
    }
  };
};

exports.audio_message_payload_by_ID = () => {
  return {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "{{Recipient-Phone-Number}}",
    "type": "audio",
    "audio": {
      "id": "<media-object-id>"
    }
  };
};

exports.audio_message_payload_by_URL = () => {
  return {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "{{Recipient-Phone-Number}}",
    "type": "audio",
    "audio": {
      "link": "http(s)://audio-url"
    }
  };
};

exports.document_message_payload_by_ID = () => {
  return {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "{{Recipient-Phone-Number}}",
    "type": "document",
    "document": {
      "id": "<your-media-id>",
      "caption": "<your-document-caption-to-be-sent>",
      "filename": "<your-document-filename>"
    }
  };
};

exports.document_message_payload_by_URL = () => {
  return {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "{{Recipient-Phone-Number}}",
    "type": "document",
    "document": {
      "link": "<http(s)://document-url>",
      "caption": "<your-document-caption-to-be-sent>"
    }
  };
};

exports.sticker_message_payload_by_ID = () => {
  return {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "{{Recipient-Phone-Number}}",
    "type": "sticker",
    "sticker": {
      "id": "<media-object-id>"
    }
  };
};

exports.sticker_message_payload_by_URL = () => {
  return {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "{{Recipient-Phone-Number}}",
    "type": "sticker",
    "sticker": {
      "link": "<http(s)://sticker-url>"
    }
  };
};

exports.video_message_payload_by_ID = () => {
  return {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "{{Recipient-Phone-Number}}",
    "type": "video",
    "video": {
      "caption": "<Message Caption>",
      "id": "<media-object-id>"
    }
  };
};

exports.video_message_payload_by_URL = () => {
  return {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "{{Recipient-Phone-Number}}",
    "type": "video",
    "video": {
      "link": "<http(s)://video-url>",
      "caption": "<Message Caption>"
    }
  };
};

exports.reply_to_message_payload = () => {
  return {
    "messaging_product": "whatsapp",
    "context": {
      "message_id": "<WAMID.ID>"
    },
    "to": "{{Recipient-Phone-Number}}",
    "type": "text",
    "text": {
      "preview_url": false,
      "body": "<YOUR-MESSAGE-CONTENT>"
    }
  };
};

exports.contact_message_payload = () => {
  return {
    "messaging_product": "whatsapp",
    "to": "{{Recipient-Phone-Number}}",
    "type": "contacts",
    "contacts": [{
      "addresses": [{
        "street": "<ADDRESS_STREET>",
        "city": "<ADDRESS_CITY>",
        "state": "<ADDRESS_STATE>",
        "zip": "<ADDRESS_ZIP>",
        "country": "<ADDRESS_COUNTRY>",
        "country_code": "<ADDRESS_COUNTRY_CODE>",
        "type": "<HOME|WORK>"
      }],
      "birthday": "<CONTACT_BIRTHDAY>",
      "emails": [{
        "email": "<CONTACT_EMAIL>",
        "type": "<WORK|HOME>"
      }],
      "name": {
        "formatted_name": "<CONTACT_FORMATTED_NAME>",
        "first_name": "<CONTACT_FIRST_NAME>",
        "last_name": "<CONTACT_LAST_NAME>",
        "middle_name": "<CONTACT_MIDDLE_NAME>",
        "suffix": "<CONTACT_SUFFIX>",
        "prefix": "<CONTACT_PREFIX>"
      },
      "org": {
        "company": "<CONTACT_ORG_COMPANY>",
        "department": "<CONTACT_ORG_DEPARTMENT>",
        "title": "<CONTACT_ORG_TITLE>"
      },
      "phones": [{
        "phone": "<CONTACT_PHONE>",
        "wa_id": "<CONTACT_WA_ID>",
        "type": "<HOME|WORK>"
      }],
      "urls": [{
        "url": "<CONTACT_URL>",
        "type": "<HOME|WORK>"
      }]
    }]
  };
};


exports.location_message_payload = () => {
  return {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "{{Recipient-Phone-Number}}",
    "type": "location",
    "location": {
      "latitude": "<LOCATION_LATITUDE>",
      "longitude": "<LOCATION_LONGITUDE>",
      "name": "<LOCATION_NAME>",
      "address": "<LOCATION_ADDRESS>"
    }
  };
};

exports.template_text_message_payload = () => {
  return {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "{{Recipient-Phone-Number}}",
    "type": "template",
    "template": {
      "name": "template-name",
      "language": {
        "code": "language-and-locale-code"
      },
      "components": [{
        "type": "body",
        "parameters": [{
            "type": "text",
            "text": "text-string"
          },
          {
            "type": "currency",
            "currency": {
              "fallback_value": "$100.99",
              "code": "USD",
              "amount_1000": 100990
            }
          },
          {
            "type": "date_time",
            "date_time": {
              "fallback_value": "February 25, 1977",
              "day_of_week": 5,
              "year": 1977,
              "month": 2,
              "day_of_month": 25,
              "hour": 15,
              "minute": 33,
              "calendar": "GREGORIAN"
            }
          }
        ]
      }]
    }
  };
};

exports.template_media_message_payload = () => {
  return {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "{{Recipient-Phone-Number}}",
    "type": "template",
    "template": {
      "name": "template-name",
      "language": {
        "code": "language-and-locale-code"
      },
      "components": [{
          "type": "header",
          "parameters": [{
            "type": "image",
            "image": {
              "link": "http(s)://the-image-url"
            }
          }]
        },
        {
          "type": "body",
          "parameters": [{
              "type": "text",
              "text": "text-string"
            },
            {
              "type": "currency",
              "currency": {
                "fallback_value": "$100.99",
                "code": "USD",
                "amount_1000": 100990
              }
            },
            {
              "type": "date_time",
              "date_time": {
                "fallback_value": "February 25, 1977",
                "day_of_week": 5,
                "year": 1977,
                "month": 2,
                "day_of_month": 25,
                "hour": 15,
                "minute": 33,
                "calendar": "GREGORIAN"
              }
            }
          ]
        }
      ]
    }
  };
};

exports.template_interactive_message_payload = () => {
  return {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "{{Recipient-Phone-Number}}",
    "type": "template",
    "template": {
      "name": "template-name",
      "language": {
        "code": "language-and-locale-code"
      },
      "components": [{
          "type": "header",
          "parameters": [{
            "type": "image",
            "image": {
              "link": "http(s)://the-image-url"
            }
          }]
        },
        {
          "type": "body",
          "parameters": [{
              "type": "text",
              "text": "text-string"
            },
            {
              "type": "currency",
              "currency": {
                "fallback_value": "$100.99",
                "code": "USD",
                "amount_1000": 100990
              }
            },
            {
              "type": "date_time",
              "date_time": {
                "fallback_value": "February 25, 1977",
                "day_of_week": 5,
                "year": 1977,
                "month": 2,
                "day_of_month": 25,
                "hour": 15,
                "minute": 33,
                "calendar": "GREGORIAN"
              }
            }
          ]
        },
        {
          "type": "button",
          "sub_type": "quick_reply",
          "index": "0",
          "parameters": [{
            "type": "payload",
            "payload": "aGlzIHRoaXMgaXMgY29v"
          }]
        },
        {
          "type": "button",
          "sub_type": "quick_reply",
          "index": "1",
          "parameters": [{
            "type": "payload",
            "payload": "9rwnB8RbYmPF5t2Mn09x4h"
          }]
        }
      ]
    }
  };
};

exports.list_message_payload = () => {
  return {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "{{Recipient-Phone-Number}}",
    "type": "interactive",
    "interactive": {
      "type": "list",
      "header": {
        "type": "text",
        "text": "<Header List Message>"
      },
      "body": {
        "text": "<List Body Message>"
      },
      "footer": {
        "text": "<Footer Message>"
      },
      "action": {
        "button": "Send",
        "sections": [{
            "title": "<List Category Item>",
            "rows": [{
                "id": "<Item ID>",
                "title": "<Item Title>",
                "description": "<Item Description>"
              },
              {
                "id": "<Item ID>",
                "title": "<Item Title>",
                "description": "<Item Description>"
              }
            ]
          },
          {
            "title": "<List Item>",
            "rows": [{
                "id": "<Item ID>",
                "title": "<Item Title>",
                "description": "<Item Description>"
              },
              {
                "id": "<Item ID>",
                "title": "<Item Title>",
                "description": "<Item Description>"
              }
            ]
          }
        ]
      }
    }
  };
};


exports.reply_button_message_payload = () => {
  return {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "{{Recipient-Phone-Number}}",
    "type": "interactive",
    "interactive": {
      "type": "button",
      "body": {
        "text": "Are you hungry?"
      },
      "action": {
        "buttons": [{
            "type": "reply",
            "reply": {
              "id": "unique-id-123",
              "title": "Yes"
            }
          },
          {
            "type": "reply",
            "reply": {
              "id": "unique-id-456",
              "title": "No"
            }
          }
        ]
      }
    }
  };
};

exports.mark_message_as_read_payload = () => {
  return {
    "messaging_product": "whatsapp",
    "status": "read",
    "message_id": "incoming-message-id"
  };
};