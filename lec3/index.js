const fs = require("fs");

function readFileSequentially(i, max) {
  if (i > max) return;

  fs.readFile(`data/${i}.txt`, "utf-8", (err, data) => {
    if (err) {
      console.error(`Error reading data/${i}.txt:`, err);
      return;
    }

    console.log(`File data/${i}.txt read`);

    readFileSequentially(i + 1, max);
  });
}

readFileSequentially(1, 8);
