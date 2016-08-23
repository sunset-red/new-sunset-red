const findData = require('../dbs/show-friend');

const express = require('express');

const router = express.Router();

router.get('/friends', (req, res)=> {
  findData((result) => {
    console.log(result);
    res.json(result);
  });
});

module.exports = router;
