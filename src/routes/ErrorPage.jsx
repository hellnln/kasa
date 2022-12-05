import { Link } from 'react-router-dom'
import '../styles/error.css'

function error() {
  return (
    <div>
      <p className="error404">404</p>
      <p className="error-text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="text-link">
        Retourner à la page d'accueil
      </Link>
    </div>
  )
}

export default error
