const express = require('express');
const sequelize = require('./config/database');
const cors = require('cors');

const app = express();
dotenv = require('dotenv').config();
app.use(express.json());
app.use(cors(
    {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }
));

const peliculasRoutes = require('./routes/Peliculas');
const categoriasRoutes = require('./routes/Categorias');

require('./config/association');

app.use('/api/peliculas', peliculasRoutes);
app.use('/api/categorias', categoriasRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}).catch(error => {
  console.error('Error al sincronizar la base de datos:', error);
});
