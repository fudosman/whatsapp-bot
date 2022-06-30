const axios = require('axios');

exports.sendGetRequest = (data)=>{

};


exports.sendPostRequest = (url, data)=>{
  axios({
    method: 'post',
    url: url,
    data: data
  })
  .then(function (response){
    return response;
  })
  .catch(function (error){
    return error;
  });
};


exports.sendPutRequest = (data)=>{

};
exports.sendDeleteRequest = (data)=>{

};