const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get(`/`, (req, res) => {
  res.send(`
  <h1>Enter Operation in url</h1>
  <p>"add" for additon</p>
  <p>"subtract" for Subtraction</p>
  <p>"multiply" for Multiplication</p>
  <p>"divide" for Division</p>
  `
  );
});
app.get('/:operation', (req, res) => {
  console.log(req.params);
  res.send(`
  <!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-color: blueviolet;
        margin: auto;
        padding: 10px;
      }
      form {
        border: 2px solid black;
        padding: 10px;
        margin: 10px auto;
        background-color: white;
        border-radius: 10px;
        box-shadow: 3px 3px 3px black;
        width: fit-content;
      }
      input {
        padding: 5px;
        margin: 5px;
      }
      button {
        width: 100%;
        padding: 10px;
        margin: 5px auto;
        color: white;
        background: linear-gradient(45deg, blue, black);
      }
      button:hover {
        background: linear-gradient(45deg, black, blue);
      }
      h1 {
        color: brown;
        font-family: 'Times New Roman', Times, serif;
        border-bottom: 3px solid grey;
      }
      h3 {
        color: black;
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
      }
    </style>
  </head>
  <body>
    <form action="/result/${req.params.operation}" method="post">
      <h1>Simple Calculator</h1>
      <h3>Operation is ${req.params.operation}</h3>
      <p>
        <input type="number" placeholder="Enter First Number" name="numOne" />
      </p>
      <p>
        <input type="number" placeholder="Enter second Number" name="numTwo" />
      </p>
      <button type="submit">${req.params.operation}</button>
    </form>
  </body>
</html>

  `);
});
app.post('/result/:operation', (req, res) => {
  let htmlRes = `
    <html>
      <head>
        <style>
          body{
            background: skyblue;
            margin: auto;
            padding: 10px;
          }
          div{
            font-family: 'Times New Roman', Times, serif;
            font-size: 24px;
            border: 2px solid black;
            padding: 10px;
            margin: 10px auto;
            background-color: white;
            border-radius: 10px;
            box-shadow: 3px 3px 3px black;
            width: fit-content;
          }
        </style>
      </head>
      <body>
    `;
  let result;
  if (req.params.operation === 'add') {
    result = `Addition of ${req.body.numOne},${req.body.numTwo} is ${
      Number(req.body.numOne) + Number(req.body.numTwo)
    }`;
  } else if (req.params.operation === 'subtract') {
    result = `Subtraction of ${req.body.numOne},${req.body.numTwo} is ${
      Number(req.body.numOne) - Number(req.body.numTwo)
    }`;
  } else if (req.params.operation === 'multiply') {
    result = `Multiplication of ${req.body.numOne},${req.body.numTwo} is ${
      Number(req.body.numOne) * Number(req.body.numTwo)
    }`;
  } else if (req.params.operation === 'divide') {
    result = `Division of ${req.body.numOne},${req.body.numTwo} is ${
      Number(req.body.numOne) / Number(req.body.numTwo)
    }`;
  } else {
    result = `NULL`;
  }
  htmlRes += `
      <div>${result}</div>
    </body>
  </html>`;
  res.send(htmlRes);
});
app.listen(3002);
console.log('app is running at port 3002');
