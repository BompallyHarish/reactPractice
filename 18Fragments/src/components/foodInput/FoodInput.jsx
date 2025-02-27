import styles from "./FoodInput.module.css"

const FoodInput = ({ /*handleInputChange*/ handleOnKeydown }) => {

    return <>
        {/* <input className={styles.foodInput}
            placeholder="Enter healthy item"
            onChange={handleInputChange}>
        </input> */}
        <input className={styles.foodInput}
            placeholder="Enter healthy item"
            onKeyDown={handleOnKeydown}>
        </input>
    </>
}

export default FoodInput