const opexController = require("../Controllers/opexController.js");

const router=require('express').Router()


router.post('/addOpex',opexController.addOpex),
router.get('/getAll',opexController.getAllOpex),
router.get('/getOne/:id',opexController.getOpexByCode);
router.put('/updateOpex/:id',opexController.modifOpex);
router.delete('/deleteOpex/:id',opexController.deleteOpex)


module.exports = router