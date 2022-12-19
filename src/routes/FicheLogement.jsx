import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Tag from '../components/Tag'
import '../styles/ficheLogements.css'
import Rating from '../components/Rating'
import Dropdown from '../components/Dropdown'
import Error from '../components/Error404'
import Carrousel from '../components/Carrousel/Carrousel'

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

  const printedLogement = logements.filter(
    (logement) => logement.id === logementId
  )
 
  if (printedLogement.length === 0) {
    return <Error />
  }

  return (
    <div>
      {printedLogement.map((logement) => (
        <div key={logement.id}>
          <Carrousel pictures={logement.pictures} />
          <div className="logement-info">
            <div className="left-info">
              <h1 className='titre-logement'>{logement.title}</h1>
              <p className='location'>{logement.location}</p>
              <ul className="main-tag">
                {logement.tags.map((tag, index) => (
                  <Tag key={index} tag={tag} />
                ))}
              </ul>
            </div>
            <div className="right-info">
              <div className="host-info">
                {logement.host.name}
                <img src={logement.host.picture} alt="profil de l'hôte"></img>
              </div>
              <div className='rating'>
                <Rating rate={logement.rating} />
              </div>
            </div>
          </div>
          <div className="description-logement">
              <Dropdown txt={logement.description} title={'Description'} />
              <Dropdown array={logement.equipments} title={'Equipements'} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Logement
