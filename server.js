const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(express.static('public'))

mongoose.connect('mongodb+srv://coffievan10_db_user:A4WMPhQ32CJIFC8i@cluster0.qcbwhrf.mongodb.net/6reezy')
.then(() => console.log('DB connectée ✅'))
.catch(err => console.log(err))

app.listen(3000, () => {
    console.log('Serveur lancé port 3000 ✅')
})
Archive
PANIER [0]
RULES
BABI.
// DROP 003