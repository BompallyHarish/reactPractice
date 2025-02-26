import styles from "./FoodInput.module.css"

const FoodInput = () => {
    const handleInputChange = (event) => {
        console.log(event.target.value)
    }
    return <>
        <input className={styles.foodInput}
            placeholder="Enter healthy item"
            onChange={handleInputChange}>
        </input>
    </>
}

export default FoodInput