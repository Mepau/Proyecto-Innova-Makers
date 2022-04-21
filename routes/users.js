var express = require('express');
var router = express.Router();


const data = [
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(JSON.stringify(data));
  return res.status(200).end();
});



module.exports = router;
