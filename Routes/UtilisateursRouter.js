const utilisateursController = require("../Controllers/UtilisateursController.js");

const router=require('express').Router()


router.post('/addUtilisateur',utilisateursController.addUtilisateur),
router.get('/getAll',utilisateursController.getAllUtilisateur),
router.get('/getOne/:id',utilisateursController.getUtilisateurByCode);
router.put('/updateUtilisateur/:id',utilisateursController.modifUtilisateur);
router.delete('/deleteUtilisateur/:id',utilisateursController.deleteUtilisateur)

router.post('/logUtilisateur',utilisateursController.login),

module.exports = router