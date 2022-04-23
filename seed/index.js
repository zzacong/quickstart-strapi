const path = require("path");
const fetch = require("node-fetch");
const { readFile } = require("fs/promises");

const STRAPI_SERVER = "http://localhost:1337";

async function main() {
  const endpoint = "animals";

  const csv = await readFile(path.join(__dirname, "seed.csv"), "utf-8");
  const rows = csv.split("\r\n").map((row) => row.split(","));
  // console.log(JSON.stringify(rows));

  const promises = rows.map((row) =>
    fetch(`${STRAPI_SERVER}/api/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: { name: row[0], species: row[1], birthdate: row[2] },
      }),
    })
  );

  await Promise.all(promises);
  console.log("SUCCESS");
  process.exit(0);
}

main();
