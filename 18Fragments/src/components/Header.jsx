import styles from './Header.module.css'

const Header = ({ items }) => {

    return <>
        <div className={styles.header}>
            {items.length == 0 ? <h1>Healthy items not available</h1> : <h1>Healthy Food</h1>}
        </div>

    </>
}

export default Header