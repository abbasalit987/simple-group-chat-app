const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send(`<form action="/" method="POST">
    <label>username:</label><br>
    <input type="text" name="username" id = "username"><br>
    <button type="submit">login</button></form>`);
  });
  
router.post('/login', (req, res, next) => {
    console.log(req.body);
    //localStorage.setItem("username", req.body);
    res.redirect('/');
  });

module.exports = router;