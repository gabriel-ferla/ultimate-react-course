import { NavLink } from "react-router-dom"

// CSS
import styles from './PageNav.module.css'

// Components
import Logo from "./Logo"

function PageNav() {
  return (
    <nav className={styles.nav}>
        <Logo />
        <ul>
            <li>
                <NavLink to='/pricing'>Pricing</NavLink>
            </li>
            <li>
                <NavLink to='/product'>Product</NavLink>
            </li>
            <li>
                <NavLink to='/login' className={styles.ctaLink}>Login</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default PageNav