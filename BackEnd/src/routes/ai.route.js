const express = require('express');
const aiController = require("../controllers/ai.controller")
const router = express.Router();
  

//user using route to pass prompts & this is a controller ,check its logic too
//to send data from frontend -->backend we are using post method
router.post("/get-review" , aiController.getReview );


//exporting routes of gen-model
module.exports = router;