const path = require("path");
const { faker } = require("@faker-js/faker");
const { format } = require("date-fns");
const { writeFile } = require("fs/promises");

// const f = () => faker.animal.type();
const f = () => format(faker.date.past(), "yyyy-MM-dd");

const arr = [...Array(20).keys()].reduce((acc, _curr) => `${acc}\n${f()}`, f());

(async () => {
  await writeFile(path.join(__dirname, "birthdates.txt"), arr, "utf-8");
})();
