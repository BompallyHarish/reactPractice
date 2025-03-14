import styles from './Buttons.module.css'

let buttonsData = [
    "AC", "%", "C", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", ".", "="]
const Buttons = ({ onButtonClick }) => {
    return <div className={styles.buttonsContainer}>
        {buttonsData.map((button, index) => (
            <button key={index} className={styles.buttonsCss} onClick={() => onButtonClick(button)}>{button}</button>
        ))}
    </div>
}

export default Buttons