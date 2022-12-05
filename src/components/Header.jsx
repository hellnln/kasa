import { Link } from 'react-router-dom'
import '../styles/header.css'
import logo from '../images/LOGO.svg'

function Header() {
  return (
    <header className="header">
      <div className="logo_kasa">
        <img className="logo_img" src={logo} alt="logo kasa" />
      </div>
      <nav className="nav">
        <Link to="/" className="nav_text">
          Accueil
        </Link>
        <Link to="/about" className="nav_text">
          A propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
