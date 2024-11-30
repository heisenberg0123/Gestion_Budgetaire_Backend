const dbConfig = require("../config/dbConfig");

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);


sequelize.authenticate()
    .then(() => {
        console.log('connected..')
    })
    .catch(err => {
        console.log('Error' + err)
    })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.capex = require('./CapexModel.js')(sequelize, DataTypes)
db.opex= require('./opexModel.js')(sequelize, DataTypes)
db.factures= require('./Factures.js')(sequelize, DataTypes)
db.factureso= require('./Factureso.js')(sequelize, DataTypes)

db.bondecommande= require('./BondeCommande.js')(sequelize, DataTypes)
db.bondecommandeo= require('./BondeCommandeopex.js')(sequelize, DataTypes)

db.utilisateurs= require('./utilisateurs.js')(sequelize, DataTypes)


db.projects= require('./projects.js')(sequelize, DataTypes)
db.projets= require('./projets.js')(sequelize, DataTypes)



db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync done!')
    })

    module.exports = db