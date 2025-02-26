import styles from "./FoodInput.module.css"

const FoodInput = ({ handleInputChange }) => {

    return <>
        <input className={styles.foodInput}
            placeholder="Enter healthy item"
            onChange={handleInputChange}>
        </input>
    </>
}

export default FoodInput