const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

const recipesRoute = require("./recipes")
const typesDietRoute = require("./typesDiets")

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/recipes", recipesRoute)
router.use("/types", typesDietRoute)



module.exports = router;
