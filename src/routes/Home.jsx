import Banner from '../components/Banner'
import Card from '../components/Card'
import imgHome from '../images/img_home.jpg'
import '../styles/home.css'


function Home() {
  return (
    <div>
      <Banner img={imgHome} />
      <div className='main-card'>
        <Card /> 
      </div>
      
    </div>
  )
}

export default Home
