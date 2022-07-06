exports.extractMessageType = (req) => {
  console.log("================================================== \n    ============== NEW REQUEST ================= \n==================================================");
  let entry = req.body ? req.body.entry[0] : null;
  //  console.log({"entry":entry});
  let id = entry ? entry.id : null;
  console.log({
    "id": id
  });

  let changes = entry ? entry.changes : null;
  console.log({
    "changes": changes
  });

  let inside_changes = changes ? changes[0] : null;
  console.log({
    "inside_changes": inside_changes
  });

  let value = inside_changes ? inside_changes.value : null;
  console.log({
    "value": value
  });

  let field = inside_changes ? inside_changes.field : null;
  console.log({
    "field": field
  });

  let messaging_product = value ? value.messaging_product : null;
  console.log({
    "messaging_product": messaging_product
  });

  let metadata = value ? value.metadata : null;
  console.log({
    "metadata": metadata
  });

  let contacts = value ? value.contacts : null;
  console.log({
    "contacts": contacts
  });

  let inside_contacts = contacts ? contacts[0] : null;
  console.log({
    "inside_contacts": inside_contacts
  });

  let messages = value ? value.messages : null;
  console.log({
    messages: messages
  });

  let inside_messages = messages ? messages[0] : null;
  console.log({
    "inside_messages": inside_messages
  });

  let contacts_inside_message = inside_messages ? inside_messages.contacts : null;
  console.log({
    "contacts_inside_message": contacts_inside_message
  });

  let contact_messages = contacts_inside_message ? contacts_inside_message[0] : null;
  console.log({
    "contact_messages": contact_messages
  });

  let addresses = contact_messages ? contact_messages.addresses : null;
  console.log({
    "addresses": addresses
  });
  let birthday = contact_messages ? contact_messages.birthday : null;
  console.log({
    "birthday": birthday
  });
  let contact_name = contact_messages ? contact_messages.name : null;
  console.log({
    "contact_name": contact_name
  });

  let org = contact_messages ? contact_messages.org : null;
  console.log({
    "org": org
  });

  let contact_phones = contact_messages ? contact_messages.phones : null;
  console.log({
    "contact_phones": contact_phones
  });

  let contact_urls = contact_messages ? contact_messages.urls : null;
  console.log({
    "contact_urls": contact_urls
  });

  // callback from a quick reply callback button
  let context = inside_messages ? inside_messages.context : null;
  console.log({
    "context": context
  });

  let button = inside_messages ? inside_messages.button : null;
  console.log({
    "button": button
  });

  let button_text = button ? button.text : null;
  console.log({
    "button_text": button_text
  });

  let button_payload = button ? button.payload : null;
  console.log({
    "button_payload": button_payload
  });

  let context_from = context ? context.from : null;
  console.log({
    "context_from": context_from
  });

  let context_id = context ? context.id : null;
  console.log({
    "context_id": context_id
  });


  // totally different from what i'm looking for
  let profile = inside_contacts ? inside_contacts.profile : null;
  console.log({
    "profile": profile
  });

  let profile_name = profile ? profile.name : null;
  console.log({
    "name": profile_name
  });

  let wa_id = inside_contacts ? inside_contacts.wa_id : null;
  console.log({
    "wa_id": wa_id
  });

  let message_from = inside_messages ? inside_messages.from : null;
  console.log({
    "from": message_from
  });

  let message_id = inside_messages ? inside_messages.id : null;
  console.log({
    "message_id": message_id
  });

  let location_message = inside_messages ? inside_messages.location : null;
  console.log({
    "location_message": location_message
  });

  let latitude = location_message ? location_message.latitude : null;
  console.log({
    "latitude": latitude
  });

  let longitude = location_message ? location_message.longitude : null;
  console.log({
    "longitude": longitude
  });

  let location_name = location_message ? location_message.name : null;
  console.log({
    "location_name": location_name
  });
  let location_address = location_message ? location_message.address : null;
  console.log({
    "location_address": location_address
  });

  // messages triggered by click to whatsapp adds
  let referral = inside_messages ? inside_messages.referral : null;
  let source_url = referral ? referral.source_url : null;
  console.log({
    "source_url": source_url
  });
  let source_id = referral ? referral.source_id : null;
  console.log({
    "source_id": source_id
  });
  let source_type = referral ? referral.source_type : null;
  console.log({
    "source_type": source_type
  });
  let referral_headline = referral ? referral.headline : null;
  console.log({
    "headline": referral_headline
  });
  let referral_body = referral ? referral.body : null;
  console.log({
    "referral_body": referral_body
  });
  let referral_media_type = referral ? referral.media_type : null;
  console.log({
    "referral_media_type": referral_media_type
  });
  let referral_image_url = referral ? referral.image_url : null;
  console.log({
    "referral_image_url": referral_image_url
  });
  let referral_video_url = referral ? referral.video_url : null;
  console.log({
    "referral_video_url": referral_video_url
  });
  let referral_thumbnail_url = referral ? referral.thumbnail_url : null;
  console.log({
    "referral_thumbnail_url": referral_thumbnail_url
  });

  // unknown messages
  let error_message = inside_messages ? inside_messages.errors : null;
  console.log({
    "error_message": error_message
  });

  //message status update notification
  let statuses = value ? value.statuses : null;
  console.log({
    "statuses": statuses
  });

  let inside_statuses = statuses ? statuses[0] : null;
  console.log({
    "inside_statuses": inside_statuses
  });

  let status = inside_statuses ? inside_statuses.status : null;
  console.log({
    "status": status
  });

  let status_conversation = inside_statuses ? inside_statuses.conversation : null;
  console.log({
    "status_conversation": status_conversation
  });

  let status_conversation_origin = status_conversation ? status_conversation.origin : null;
  console.log({
    "status_conversation_origin": status_conversation_origin
  });

  let status_conversation_origin_type = status_conversation_origin ? status_conversation_origin.type : null;
  console.log({
    "status_conversation_origin_type": status_conversation_origin_type
  });

  let pricing = inside_statuses ? inside_statuses.pricing : null;
  console.log({
    "pricing": pricing
  });

  let status_id = inside_statuses ? inside_statuses.id : null;
  console.log({
    "status_id": status_id
  });
  let status_timestamp = inside_statuses ? inside_statuses.timestamp : null;
  console.log({
    "status_timestamp": status_timestamp
  });
  let status_recipient_id = inside_statuses ? inside_statuses.recipient_id : null;
  console.log({
    "status_recipient_id": status_recipient_id
  });
  // messages with show security notification
  let message_identity = inside_messages ? inside_messages.identity : null;
  console.log({
    "message_identity": message_identity
  });

  let message_identity_acknowledged = message_identity ? message_identity.acknowledged : null;
  console.log({
    "message_identity_acknowledged": message_identity_acknowledged
  });

  let message_identity_created_timestamp = message_identity ? message_identity.created_timestamp : null;
  console.log({
    "message_identity_created_timestamp": message_identity_created_timestamp
  });

  let message_identity_hash = message_identity ? message_identity.hash : null;
  console.log({
    "message_identity_hash": message_identity_hash
  });

  let message_timestamp = inside_messages ? inside_messages.timestamp : null;
  console.log({
    "message_timestamp": message_timestamp
  });

  let message_text = inside_messages ? inside_messages.text : null;
  console.log({
    "message_text": message_text
  });

  let message_text_body = message_text ? message_text.body : null;
  console.log({
    "message_text_body": message_text_body
  });

  let message_type = inside_messages ? inside_messages.type : null;
  console.log({
    "message_type": message_type
  });

  // images
  let image = inside_messages ? inside_messages.image : null;
  console.log({
    "image": image
  });

  let sha256 = image ? image.sha256 : null;
  console.log({
    "sha256": sha256
  });

  let image_id = image ? image.id : null;
  console.log({
    "image_id": image_id
  });

  let mime_type = image ? image.mime_type : null;
  console.log({
    "mime_type": mime_type
  });

  let caption = image ? image.caption : null;
  console.log({
    "caption": caption
  });

  // stickers
  let sticker = inside_messages ? inside_messages.sticker : null;
  console.log({
    "sticker": sticker
  });

  let sticker_id = sticker ? sticker.id : null;
  console.log({
    "sticker_id": sticker_id
  });

  let sticker_mime_type = sticker ? sticker.mime_type : null;
  console.log({
    "sticker_mime_type": sticker_mime_type
  });

  let sticker_sha256 = sticker ? sticker.sha256 : null;
  console.log({
    "sticker_sha256": sticker_sha256
  });


  let display_phone_number = metadata ? metadata.display_phone_number : null;
  console.log({
    "phone_number": display_phone_number
  });


  let phone_number_id = metadata ? metadata.phone_number_id : null;
  console.log({
    "phone_number_id": phone_number_id
  });

  return  {
    entry,
    id,
    changes,
    inside_changes,
    value,
    field,
    messaging_product,
    metadata,
    contacts,
    inside_contacts,
    messages,
    inside_messages,
    contacts_inside_message,
    contact_messages,
    addresses,
    birthday,
    contact_name,
    org,
    contact_phones,
    contact_urls,
    context,
    button,
    button_text,
    button_payload,
    context_from,
    context_id,
    profile,
    profile_name,
    wa_id,
    message_from,
    message_id,
    location_message,
    latitude,
    longitude,
    location_name,
    location_address,
    referral,
    source_url,
    source_id,
    source_type,
    referral_headline,
    referral_body,
    referral_media_type,
    referral_image_url,
    referral_video_url,
    referral_thumbnail_url,
    error_message,
    statuses,
    inside_statuses,
    status,
    status_conversation,
    status_conversation_origin,
    status_conversation_origin_type,
    pricing,
    status_id,
    status_timestamp,
    status_recipient_id,
    message_identity,
    message_identity_acknowledged,
    message_identity_created_timestamp,
    message_identity_hash,
    message_timestamp,
    message_text,
    message_text_body,
    message_type,
    image,
    sha256,
    image_id,
    mime_type,
    caption,
    sticker,
    sticker_id,
    sticker_mime_type,
    sticker_sha256,
    display_phone_number,
    phone_number_id,
  };

};