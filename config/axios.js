const { axios } = require("axios");

const axioseDataResponse = async (url) => {
  const resposne = await axios.get(`http://80.75.14.90:9090/${url}`);
  const data = await resposne.data;
  return data;
};
export default axioseDataResponse;
