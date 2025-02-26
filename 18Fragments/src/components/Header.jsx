const Header = ({ items }) => {
    return <>
        {items.length == 0 ? <h1>Healthy items not available</h1> : <h1>Healthy Food</h1>}
    </>
}

export default Header