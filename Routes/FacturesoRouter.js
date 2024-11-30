const factureso = require("../Controllers/FacturesoController.js")

const router=require('express').Router()


router.post('/addFactureso',factureso.addFactureso),
router.get('/getAll',factureso.getAllFactureso),
router.get('/getOne/:id',factureso.getFacturesoByCode),
router.put('/updateFactureso/:id',factureso.modifFactureso),
router.delete('/deleteFactureso/:id',factureso.deleteFactureso)
router.delete('/deleteFactureso/opex/:id',factureso.deleteFacturesByOpex)
router.delete('/deleteFactureso/bonde/:id',factureso.deleteFactByBondeo)

module.exports = router