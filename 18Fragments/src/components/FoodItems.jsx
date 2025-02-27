import styles from "./FoodItems.module.css"


const FoodItems = ({ item, key, bought, handleBuyButton }) => {
    // const handleBuyButton = () => {
    //     console.log(`${item} has be bought`)
    // }
    return <>
        <li className={` ${styles['kg-item']} list-group-item ${bought && 'active'}`}
            key={key}>

            <span className={styles.kgSpan}> {item}</span>

            <button
                className={`${styles.buyButton} btn btn-info`}
                onClick={handleBuyButton}>Buy
            </button>

        </li>
    </>
}

export default FoodItems