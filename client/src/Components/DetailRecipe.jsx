import React from "react";
import { Link , useParams} from "react-router-dom"
import { useDispatch , useSelector } from "react-redux"
import { useEffect , useState} from "react";
import { getDetail } from "../Redux/actions";
import styles from "../Styles/DetailRecipe.module.css"

export default function DetailRecipe(){
    
    const dispatch = useDispatch()
    const recipeId = useParams()
    const detailRecipe = useSelector((state) => state.detail) 
    console.log(detailRecipe)
    useEffect(() => {
        dispatch(getDetail(recipeId.id))
    },[dispatch])

    return (
        <div className={styles.container}>
            <div>
            {
                (detailRecipe.length === 0) ? 
                    <div className={styles.container}>
                        <p className={styles.loading}>Loading ...</p>
                    </div> 
                :
                    <div className={styles.box}>
                        <img className={styles.image} src={detailRecipe.image} alt="No Image Found"/>
                        <h1 className={styles.mainTitle}>{detailRecipe.title}</h1>
                        <h3 className={styles.subTitle}>Summary</h3>
                        <p className={styles.info}>{detailRecipe.summary}</p>                         
                        <h3 className={styles.subTitle}>Spoonacular Score</h3>
                        <p className={styles.info}>{detailRecipe.spoonacularScore}</p>
                        <h3 className={styles.subTitle}>Health Score</h3>
                        <p className={styles.info}>{detailRecipe.healthScore}</p>
                        <h3 className={styles.subTitle}>Diets</h3>
                        <p className={styles.info}>{detailRecipe.diets?.map(r => (<li className={styles.diets}>{r.name} </li>))}</p>
                        <h3 className={styles.subTitle}>Instructions</h3>
                        <p className={styles.info}>{detailRecipe.instructions}</p>
                    </div>
                    
                
            }
            </div>
            <div className={styles.boxButton}>
                <Link to="/home">
                    <button className={styles.button} >Go back!</button>
                </Link>
            </div>
        </div>
    )

}