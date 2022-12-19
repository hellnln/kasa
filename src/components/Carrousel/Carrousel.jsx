import { useState } from 'react'
import '../../styles/carrousel.css'
import CarrouselControls from './CarrouselControls'

function Carrousel({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const prev = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : pictures.length - 1
    setCurrentSlide(index)
  }

  const next = () => {
    const index = currentSlide < pictures.length - 1 ? currentSlide + 1 : 0
    setCurrentSlide(index)
  }

  const oneImg = () => {
    if (pictures.length > 1) {
      return true
    }
    return false
  }
  

  return oneImg() ? (
    <div className="carrousel">
      <div
        className="carrousel-inner"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {pictures.map((slide, index) => (
          <div className="carrousel-item" key={index}>
            <img src={slide} alt="vue intérieur d'un logement" />
          </div>
        ))}
      </div>
      <span className="carrousel-number">
        {currentSlide + 1}/{pictures.length}
      </span>
      <CarrouselControls prev={prev} next={next} />
    </div>
  ) : (
    <div className="carrousel">
      <div className="carrousel-inner">
        {pictures.map((slide, index) => (
          <div className="carrousel-item" key={index}>
            <img src={slide} alt="vue intérieur d'un logement" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carrousel
