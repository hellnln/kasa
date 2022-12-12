import '../styles/card.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Card() {
  const [logements, setLogements] = useState([])
  
  useEffect(() => {
    axios
      .get('/data.json')
      .then((res) => setLogements(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="main-card">
      {logements.map((logement, index) => (
        <Link  key={index} to={`/ficheLogement/${logement.id}`}>
          <div className="card">
            <img
              src={logement.cover}
              className="img-logement"
              alt="vue de l'intérieur d'un logement"
            />
            <h2 className="logement-title">{logement.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  )
}
