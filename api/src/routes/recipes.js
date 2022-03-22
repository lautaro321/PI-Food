const { Router } = require('express');
const router = Router()
const axios = require("axios")
const { getApiRecipes, getAllRecipes, searchById } = require("../Controlls/recipes");
const { Recipe } = require("../db");

router.get("/", async (req,res,next) =>{ 
    try {
        const name = req.query.name
        const allRecipes = await getAllRecipes()
        if(name){
             let recipe = allRecipes.filter(recipe => recipe.title?.toLowerCase().includes(name.toString().toLowerCase()))
            if(recipe.length){
                res.status(200).send(recipe)
            } else {
                res.status(404).send({message:"Recipe doesnt exist"})  
            }
        } else {
            res.status(200).send(allRecipes)
        }

    } catch (error) {
        next(error)
    }

})

router.get("/:idRecipe", async(req,res,next) => {
    try {
        const id = req.params.idRecipe
        const detailById = await searchById(id)
        if (!detailById){ 
            return res.status(404).send("Recipe by Id doesnt exist")
        }
        res.status(200).send(detailById)

    } catch (error) {
        next(error)        
    }
})


router.post("/create", async (req,res,next) => {
    try {
        const {title, summary, spoonacularScore, healthScore, instructions, image, diets} = req.body

        const recipeCreate = await Recipe.create({
            title,
            summary,
            spoonacularScore,
            healthScore,
            instructions,
            image
        })

        const proms = diets.map(diet => recipeCreate.addDiet(diet));
        await Promise.all(proms)

        res.status(200).send({ msg: "Recipe successfully created" })

    } catch (error) {
        next(error)
    }
})

module.exports = router;