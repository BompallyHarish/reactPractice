import styles from './Display.module.css'
const Display = ({ inputValue }) => {
    return <input type='text' className={styles.display} value={inputValue}></input>
}

export default Display