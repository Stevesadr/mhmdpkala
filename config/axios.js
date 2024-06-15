const { axios } = require("axios");

const axioseDataResponse = async (url) => {
  const urldata=await fetch(`http://80.75.14.90:9090/${url}`)
  const resdata=await urldata.json()
  return resdata
  // const resposne = await axios.get(`http://80.75.14.90:9090/${url}`);
  // const data = await resposne.data;
  // return data;
};
export default axioseDataResponse;
