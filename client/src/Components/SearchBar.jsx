import React from "react"
import {useState} from "react"
import { useDispatch } from "react-redux"
import { searchRecipe } from "../Redux/actions"
import styles from "../Styles/SearchBar.module.css"


export default function SearchBar({title}){
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    
    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(searchRecipe(name))
        setName("")
    }

    return (
        <div className={styles.container}>
            <input className={styles.textBox} type="search" placeholder="Search Recipe..." value={name} onChange={(e) => handleInputChange(e)}></input>
            <button className={styles.button} type="submit"  onClick={(e) => handleSubmit(e)}>Find Me</button>
        </div>
    )
}