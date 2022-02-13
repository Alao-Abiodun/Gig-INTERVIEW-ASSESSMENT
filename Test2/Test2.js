const axios = require("axios");
const coinGeckBaseUrl = "https://api.coingecko.com/api/v3/asset_platforms";
const { successResMsg, errorResMsg } = require("./response");

const fetchAssetsPlatform = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const { data } = await axios.get(`${coinGeckBaseUrl}`);
    const offset = (page - 1) * limit;
    const result = data.slice(offset, page * limit);
    return successResMsg(res, 200, result);
  } catch (error) {
    console.log(error);
    return errorResMsg(res, 500, "Error Server");
    next(error);
  }
};

module.exports = { fetchAssetsPlatform };
