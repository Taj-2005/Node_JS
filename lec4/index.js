const http = require('http');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Harsith</title>
</head>
<body>
    <div style="display:flex; flex-direction: column; align-items:center; justify-content: center; background-color: black;border-radius:25px;hover:background-color:grey;"
    onmouseover="this.style.backgroundColor='grey';"
    onmouseout="this.style.backgroundColor='black';">
        <h1 style="color: blue; font-size: 100px; font-weight: bold; display: flex; flex-direction: row; justify-content: center; align-items: center; height: screen">Harsith</h1>
        <p style="color: green; font-size: 25px; display: flex; flex-direction: row; justify-content: center; align-items: center; height: screen">
        Meet Harsith, a Cybersecurity and Java Developer, React Developer, and a passionate Tech Enthusiast who loves exploring innovative technologies.
        <br>
        <p style="text-align:center;color: white;">I <span style="color:red">♡</span> Badminton and rugged single forever</p>
        </p>
    </div>
    <div style="margin-top: 30px;display:flex; flex-direction: column; align-items:center; justify-content: center; background-color: grey;border-radius:25px;hover:background-color:grey;"
    onmouseover="this.style.backgroundColor='black';"
    onmouseout="this.style.backgroundColor='grey';">
    <h1 style="color: blue; font-size: 100px; font-weight: bold; display: flex; flex-direction: row; justify-content: center; align-items: center; height: screen">Jigyasu</h1>
    <p style="color: darkgreen; font-size: 25px; text-align:center; font-style: italic;display: flex; flex-direction: row; justify-content: center; align-items: center; height: screen">
    Jigyasu is a Competitive Programmer with a Codeforces rating of 1600 (Expert). He solves problems with ease and showcases superb problem-solving skills.
    </p>
    <p style="text-align:center;color: white;">I <span style="color:red">♡</span> CP and Lucky Manya</p>
    </div>
</body>
</html>`;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHead(200, { 'Content-Type': 'html' });
    res.end(html);
    
})


 server.listen(3000, () => {
        console.log('Server running at http://localhost:3000/');
})


