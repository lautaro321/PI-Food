import React from "react";
import styles from "../Styles/SingleCard.module.css"


export default function Card({ image , title , diets }){

    return (
        <div className={styles.mainContainer}>
            <img className={styles.image} src={image} alt="Image not found"/>
            <div className={styles.innerContainer}>
                <h3 className={styles.title}>{title}</h3>
                <h5 className={styles.diets}>{diets}</h5>
            </div>
        </div>
    )
}