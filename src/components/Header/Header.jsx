import { Link, useLocation } from "react-router-dom"
import styles from './Header.module.css'

const Header = () => {
    const location = useLocation()
    return (
        <>
            <header className={styles.header}>
                <Link to='/' className={`${location.pathname.includes('/movies') ? '': styles.red}`}>Home</Link>
                <Link to='/movies' className={`${location.pathname.includes('/movies') ? styles.red : ''}`}>Movies</Link>
            </header>
        </>
    )
}
export default Header