/*const {Recipe , Diet}= require ("../db")
const axios = require ("axios")
require("dotenv").config()
const{API_KEY}=process.env;

const preLoadDiets = async() => {
    try {
        const apiInfo = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY3}&addRecipeInformation=true&number=100`)
        const apiDiets = apiInfo.data?.results.map(element => element.diets)
        const repeatedDiets = apiDiets.flat()
        const finalListOfDiets = [...new Set(repeatedDiets)] //el set solo funciona con valores primitivos, no objetos OJO!
        
        const diets = finalListOfDiets.map(name => ({ name }));
        await Diet.bulkCreate(diets)
    } catch(err) {
        console.error(err)
    }
} 


module.exports = {
    preLoadDiets
}*/