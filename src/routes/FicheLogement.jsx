import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Tag from '../components/Tag'
import '../styles/ficheLogements.css'

function Logement() {
  const logementRef = useParams()
  const logementId = logementRef.id

  const [logements, setLogement] = useState([])

  useEffect(() => {
    axios
      .get('/data.json')
      .then((res) => setLogement(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      {logements
        .filter((logement) => logement.id === logementId)
        .map((logement) => (
          <div className="logement-info" key={logement.id}>
            <div className="left-info">
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>
              <ul className="main-tag">
                {logement.tags.map((tag, key) => (
                  <Tag key={key} tag={tag} />
                ))}
              </ul>
            </div>
            <div className="right-info">
              <div className='host-info'>
                {logement.host.name}
                <img src={logement.host.picture} alt="profil de l'hôte"></img>
              </div>
              <div>{logement.rating}</div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Logement
