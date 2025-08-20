const fs = require('fs');
const getRandomNumbers = (k) => {
    let content = "";
    for (let j = 1; j <= k; j++){
        content += `${Math.floor(Math.random() * 100) + 1}\n`;
    }
    return content
} 

if (!fs.existsSync("data")) {
    fs.mkdirSync("data");
}

for (let i = 1; i < 9; i++){
    // fs.writeFileSync(`data/${i}.txt`, content);
    fs.writeFile(`data/${i}.txt`, getRandomNumbers(i),() => console.log(`File data/${i}.txt created`));
}