const express =require('express')
const cors = require('cors')
const app =express()
const port=3000;

var corOption ={
    origin: 'http://localhost:4200'
}

app.get("/",(req,res)=>{
    res.send("Hello it works")
})

const capexRouter =require('./Routes/CapexRouter.js')
const opexRouter =require('./Routes/OpexRouter.js')
const bondeCommandeRouter=require('./Routes/BondeCommandeRouter.js')
const bondeCommandoRouter=require('./Routes/BondeCommandeopexRouter.js')
const facturesRouter=require('./Routes/FacturesRouter.js')
const facturesoRouter=require('./Routes/FacturesoRouter.js')

const utilisateursRouter =require('./Routes/UtilisateursRouter.js')

const projectsRouter=require('./Routes/ProjectsRouter.js')
const projetsRouter=require('./Routes/ProjetsRouter.js')


app.use(cors(corOption))
app.use(express.json())


app.use('/capex',capexRouter)

app.use('/opex',opexRouter)

app.use('/bondecommande',bondeCommandeRouter)
app.use('/bondecommandeo',bondeCommandoRouter)
app.use('/factures',facturesRouter)
app.use('/factureso',facturesoRouter)


app.use('/utilisateurs',utilisateursRouter)



app.use('/projects',projectsRouter)
app.use('/projets',projetsRouter)


app.listen(port,()=>{
    console.log(`localhost:3000`)
});