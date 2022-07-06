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


  let messages = value ? value.messages : null;
  console.log({
    messages: messages
  });

  let inside_messages = messages ? messages[0] : null;
  console.log({
    "inside_messages": inside_messages
  });

  let message_from = inside_messages ? inside_messages.from : null;
  console.log({
    "from": message_from
  });

  let message_id = inside_messages ? inside_messages.id : null;
  console.log({
    "message_id": message_id
  });

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

  let display_phone_number = metadata ? metadata.display_phone_number : null;
  console.log({
    "phone_number": display_phone_number
  });


  let phone_number_id = metadata ? metadata.phone_number_id : null;
  console.log({
    "phone_number_id": phone_number_id
  });


};