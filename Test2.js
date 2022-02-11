const axios = require("axios");
const coinGeckBaseUrl = "https://api.coingecko.com/api/v3/asset_platforms";

// const fetchCoinGecko = async () => {
//   try {
//     const response = await axios.get(`${coinGeckBaseUrl}`);
//     console.log(response.data);
//     console.log("resulttttttt");
//     console.log(result);
//     console.log("resultttttt");
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// fetchCoinGecko();

exports.fetchAsset = async (req, res, page, limit) => {
  try {
    // const {page, limit} = req.query;
    const response = await axios.get(`${coinGeckBaseUrl}?${page}&${limit}`);
    console.log(response.data);
  } catch (error) {}
};
