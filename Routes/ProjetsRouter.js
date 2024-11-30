const projets = require("../Controllers/ProjetsController.js")

const router=require('express').Router()


router.post('/addProjets',projets.addProjets),
router.get('/getAll',projets.getAllProjets),
router.get('/getOne/:id',projets.getProjetsByCode),
router.put('/updateProjets/:id',projets.modifProjets),
router.delete('/deleteProjets/:id',projets.deleteProjets)
router.delete('/deleteProjets/parOpex/:id',projets.deleteProjetsByopex)

router.delete('/deleteProjets/parBondeo/:id',projets.deleteProjetsByBandeo)

router.put('/updateProjets/parOpex/:id',projets.modifByidOpex),

router.put('/updateProjets/parBondeo/:id',projets.modifProjetsByidBandeo),


router.get('/getOne/parbandeo/:id',projets.getProjetsByBandeo),



router.delete('/deleteProjets/parFact/:id',projets.deleteProjetsByFact)
router.put('/updateProjets/parFact/:id',projets.modifProjetsByidFact),


router.get('/getOne/parFact/:id',projets.getProjetsByFact),


module.exports = router