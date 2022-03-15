const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  const pathToForm = path.join(__dirname, 'registrationForm.html');
  res.sendFile(pathToForm);
});
app.post('/register', (req, res) => {
  res.send(
    `
      <!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-color: blueviolet;
        margin: auto;
        padding: 10px;
      }
      table {
        padding: 5px;
        margin: 5px auto;
        border-collapse: collapse;
        background: pink;
        box-shadow: 3px 3px black;
      }
      td,
      th {
        border: 2px solid brown;
        padding: 15px;
        margin: 15px;
      }
      tr:hover {
        background: rgb(189, 187, 187);
      }
      h1 {
        color: white;
        font-family: 'Times New Roman', Times, serif;
        border-bottom: 3px solid purple;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div>
      <table>
      <h1>Details</h1>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
          <th>Date of Birth</th>
          <th>City</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>${req.body.username}</td>
          <td>${req.body.email}</td>
          <td>${req.body.password}</td>
          <td>${req.body.dob}</td>
          <td>${req.body.city}</td>
          <td>${req.body.country}</td>
        </tr>
      </table>
    </div>
  <body>
</html>

      `
  );
});
app.listen(3001);
console.log('app running at port 3001');
