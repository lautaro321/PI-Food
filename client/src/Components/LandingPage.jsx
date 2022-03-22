import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/LandingPage.module.css"

export default function LandingPage(){
    return (
        <div>
            <div className={styles.background}>
             <h1 className={styles.apiTitle}>welcome to PI FOODS</h1>
             <Link to = "/home">
                <button className={styles.button} >Enter</button>
             </Link>
            </div>
        </div>
    )
} 

