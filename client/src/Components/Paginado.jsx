import React from "react";
import styles from "../Styles/Paginado.module.css"

export default function Paginado({recipesPerPage, allRecipes, paginado}){
    const pageNumber = []
    
    for(let i = 0; i < Math.ceil(allRecipes/recipesPerPage); i++){
        pageNumber.push(i+1)
    }

    return (
        <nav>
            <ul className={styles.barra}>
                { pageNumber?.map(number => (
                    <li key={number}>
                        <a onClick={()=> paginado(number)}>{number}</a>
                    </li>
                ))
                }
            </ul>
        </nav>
    )
}