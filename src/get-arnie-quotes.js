const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  return await Promise.all(urls.map(getQuoteSingle));
};

const getQuoteSingle = async (url) => {

  try {
    const result = await httpGet(url);
    const messageBody = JSON.parse(result.body);
        
    return result.status === 200 
      ? {"Arnie Quote": messageBody.message} 
      : {"FAILURE": messageBody.message};
  } catch (error) { 
    console.log(error);
    return { "FAILURE" : error.message };
  }
}

module.exports = {
  getArnieQuotes,
};
