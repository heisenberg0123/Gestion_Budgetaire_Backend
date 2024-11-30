const projects = require("../Controllers/ProjectsController.js")

const router=require('express').Router()


router.post('/addProjects',projects.addProjects),
router.get('/getAll',projects.getAllProjects),
router.get('/getOne/:id',projects.getProjectsByCode),
router.put('/updateProjects/:id',projects.modifProjects),
router.delete('/deleteProjects/:id',projects.deleteProjects)
router.delete('/deleteProjects/parCapex/:id',projects.deleteProjectsBycapex)
router.delete('/deleteProjects/parOpex/:id',projects.deleteProjectsByopex)

router.delete('/deleteProjects/parBonde/:id',projects.deleteProjectsByBande)

router.put('/updateProjects/parCapex/:id',projects.modifByidCapex),

router.put('/updateProjects/parOpex/:id',projects.modifByidOpex),
router.put('/updateProjects/parBonde/:id',projects.modifProjectsByidBande),


router.get('/getOne/parbande/:id',projects.getProjectsByBande  ),




router.delete('/deleteProjects/parFact/:id',projects.deleteProjectsByFact)
router.put('/updateProjects/parFact/:id',projects.modifProjectsByidFact),


router.get('/getOne/parFact/:id',projects.getProjectsByFact  ),


module.exports = router