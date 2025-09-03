const express = require('express');
const app = express();

function validate(req, res, next) {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send({ error: "Both parameters must be valid numbers" });
    }
    next();
}

app.get('/:num1/:num2', validate, (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);

    const sum = num1 + num2;
    const product = num1 * num2;

    res.send({
        num1,
        num2,
        sum,
        product
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
