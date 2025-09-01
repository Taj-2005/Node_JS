const fs = require('fs').promises;

let chain = Promise.resolve();

for (let i = 1; i < 9; i++) {
  chain = chain.then(() => 
    fs.readFile(`data/${i}.txt`, 'utf-8')
      .then(data => {
        console.log(`File data/${i}.txt read`);
        console.log(data[0]);
      })
  );
}
