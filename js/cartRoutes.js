const express = require('express');
const CartItem = require('./CartItem');

const router = express.Router();

router.post('/add-to-cart', async (req, res) => {
  const { userId, product, quantity } = req.body;

  const cartItem = new CartItem({
    userId,
    product,
    quantity,
  });

  try {
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar ao carrinho' });
  }
});

router.get('/get-cart/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const cartItems = await CartItem.find({ userId });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar carrinho' });
  }
});

module.exports = router;
