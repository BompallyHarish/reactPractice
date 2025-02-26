import styles from "./FoodItems.module.css"

const FoodItems = ({ item, key }) => {
    return <li class={` ${styles['kg-item']} list-group-item`} key={key}>{item}</li>
}

export default FoodItems