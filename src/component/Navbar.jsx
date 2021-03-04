import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.jpg'
import styles from '../views/style.module.css'

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand navbar-light bg-light">
  <div className="container-fluid">
  <Link to="/" className="nav-link active" aria-current="page">
    <img id={styles.logo} src={logo} alt=""/>
  </Link>
  </div>
</nav>
    )
}

export default Navbar