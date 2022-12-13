import imgAbout from '../images/img_about.jpg'
import Dropdown from '../components/Dropdown'
import Banner from '../components/Banner'

function About() {
  const items = [
    {
      id: 1,
      value: 'Fiabilité',
      text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    },
    {
      id: 2,
      value: 'Respect',
      text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      id: 3,
      value: 'Service',
      text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      id: 4,
      value: 'Sécurité',
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]

  return (
    <div>
      <Banner img={imgAbout} alt={"Vue panoramique d'une montagne"} />
      <section className='items'>
        {items.map((items) => (
          <div key={items.id}>
            <Dropdown title={items.value} txt={items.text} />
          </div>
        ))}
      </section>
    </div>
  )
}

export default About
