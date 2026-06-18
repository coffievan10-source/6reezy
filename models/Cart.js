const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
  userId: String,
  produits: [
    {
      productId: { type: String, required: true },
      taille: String,
      quantite: Number
    }
  ]
})

module.exports = mongoose.model('Cart', cartSchema)
