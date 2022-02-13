const express = require("express");
const app = express();

const { fetchAssetsPlatform } = require("./Test2");
// console.log(coinGecko.fetchAsset(1, 10));

// app.get("/", (req, res) => {
//   return res.status(200).json({
//     message: "first entry point",
//   });
// });

app.get("/api/v1/assests", fetchAssetsPlatform);

app.listen(2018, () => {
  console.log("app is listening on PORT 2018");
});
