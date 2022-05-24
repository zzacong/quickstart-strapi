const axios = require("axios");

const STRAPI_SERVER = "http://localhost:1337";

async function main() {
  const endpoint = "animals";
  const url = new URL(endpoint, STRAPI_SERVER);
  const promises = rows.map((row) => axios.post(url.toString(), { data }));

  await Promise.all(promises);
  console.log("SUCCESS");
  process.exit(0);
}

main().catch(console.error);
