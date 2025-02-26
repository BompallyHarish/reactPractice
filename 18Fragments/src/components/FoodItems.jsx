import styles from "./FoodItems.module.css"


const FoodItems = ({ item, key }) => {
    const handleBuyButton = () => {
        console.log(`${item} has be bought`)
    }
    return <>
        <li class={` ${styles['kg-item']} list-group-item`} key={key}>
            <span className={styles.kgSpan}> {item}</span>
            <button className={`${styles.buyButton} btn btn-info`} onClick={handleBuyButton}>Buy</button>
        </li>
    </>
}

export default FoodItems