import aboutDesktop from '../images/aboutDesktop.png'
import aboutMobile from '../images/aboutMobile.png'
import Dropdown from '../components/Dropdown'


import '../styles/about.css'

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
    <div className="main">
              <section className="banner">
<img
  className="img_desktop"
  src={aboutDesktop}
  alt="Vue panoramique d'une montagne desktop"
/>
<img
  className="img_mobile"
  src={aboutMobile}
  alt="Vue panoramique d'une montagne mobile"
/>
</section>
      <section>
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
