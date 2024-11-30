const capexController = require("../Controllers/CapexController.js");

const router=require('express').Router()


router.post('/addCapex',capexController.addCapex),
router.get('/getAll',capexController.getAllCapex),
router.get('/getOne/:id',capexController.getCapexByCode);
router.put('/updateCapex/:id',capexController.modifCapex);
router.delete('/deleteCapex/:id',capexController.deleteCapex)


module.exports = router