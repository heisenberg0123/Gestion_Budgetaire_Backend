const factures = require("../Controllers/FacturesController.js")

const router=require('express').Router()


router.post('/addFactures',factures.addFactures),
router.get('/getAll',factures.getAllFactures),
router.get('/getOne/:id',factures.getFacturesByCode),
router.put('/updateFactures/:id',factures.modifFactures),
router.delete('/deleteFactures/:id',factures.deleteFactures)
router.delete('/deleteFactures/capex/:id',factures.deleteFacturesByCapex)
router.delete('/deleteFactures/bonde/:id',factures.deleteFactByBonde)




module.exports = router