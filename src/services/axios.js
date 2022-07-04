const axios = require('axios');

/////////////////////////////////////////////////////////////

// write your Axios code here

/////////////////////////////////////////////////////////////


exports.handlePostRequests = async (config) => {
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


exports.handleGetRequest = (config) => {
  axios(config);
};


exports.handlePutRequest = (config) => {
  axios(config);
};


exports.handleDeleteRequest = (config) => {
  axios(config);
};