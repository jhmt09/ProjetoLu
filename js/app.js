const express = require('express');
const mongoose = require('mongoose');
const cartRoutes = require('./cartRoutes');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/carrinho', cartRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
