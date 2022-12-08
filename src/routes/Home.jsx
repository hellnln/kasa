import Banner from '../components/Banner'
import Card from '../components/Card'
import imgHome from '../images/img_home.jpg'
import '../styles/home.css'

function Home() {
  return (
    <div>
      <section className='home-banner'>
        <Banner img={imgHome} alt={'Vue panoramique montagne et mer'} />
        <p className='text-banner'>Chez vous, partout et ailleurs</p>
      </section>
      
      <Card />
    </div>
  )
}

export default Home
