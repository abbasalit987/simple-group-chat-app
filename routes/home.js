const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res, next) => {
    fs.readFile('chat_history.txt', (err, data) => {
        if (err) {
          console.error(err);
          data = 'No Chat exists'
        }
        res.send(`${data}<form action="/" method="POST" onSubmit = "document.getElementById('username')">
        <label>message: </label><br>
        <input type="text" name="message" id = "message">
        <input type="hidden" name="username" id = "username"><br>
        <button type="submit">send</button></form>`)
      });
  });

router.post('/', (req, res, next) => {
    //username = localStorage.getItem('username')
    fs.writeFile('chat_history.txt', `${req.body.username} : ${req.body.message} \n`, {flag: 'a'}, 
    err => err? console.error(err) : res.redirect('/'));
  });
  
module.exports = router;

