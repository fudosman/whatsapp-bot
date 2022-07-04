const axios = require('axios');

/////////////////////////////////////////////////////////////

// write your Axios code here

/////////////////////////////////////////////////////////////



exports.message_is_read = async (config) => {
  console.log({
    info: "incomming data",
    data: config.data,
    config: config
  });
  return await axios(config)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};


exports.sendGetRequest = (config) => {
  axios(config);
};


exports.sendPutRequest = (config) => {
  axios(config);
};


exports.sendDeleteRequest = (config) => {
  axios(config);
};