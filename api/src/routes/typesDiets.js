const { Router } = require('express');
const router = Router()
const axios = require("axios")
//const {  dietsPreload } = require("../Controlls/diets");
const { Diet } = require("../db")
require('dotenv').config();
const{API_KEY, API_KEY2, API_KEY3}=process.env;


/*
router.get("/", async (req,res,next) => {
    try {
        let dietDb = await Diet.findAll()
        res.status(200).send(dietDb)
        
    } catch (error) {
        next(error)
    }
})
*/



router.get("/", async (req, res, next) => {
    try {
        const info = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY3}&addRecipeInformation=true&number=100`);
        const diets = info.data?.results.map(e => e.diets);
        const flatDiet = diets.flat().concat("vegetarian", "Ketogenic");
        const finalList = [...new Set(flatDiet)];
        console.log(finalList);
    
        finalList.forEach( e => {
            Diet.findOrCreate({
                where: {name: e}
            });
        });
    
    
        const allDiets = await Diet.findAll();
       
    
            res.status(200).send(allDiets);
       
    } catch (error) {
        next(error);
    }
    });
    
    module.exports = router;

   