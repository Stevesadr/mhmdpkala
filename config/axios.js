const { axios } = require("axios");

const axioseDataResponse = async (url) => {
  const resposne = await fetch(`http://80.75.14.90:9090/${url}`);
  const data = await resposne.json();
  return data;
};
export default axioseDataResponse;
