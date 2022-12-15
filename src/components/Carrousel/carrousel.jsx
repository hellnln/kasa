import { useState, useEffect } from 'react'
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

  // useEffect(() => {
  //     const slideInterval = setInterval(() => {
  //        setCurrentSlide(currentSlide => currentSlide < pictures.length -1 ? currentSlide + 1 : 0)

  //     }, 3000)

  //     return () => clearInterval(slideInterval)
  // }, [])

  return (
    // <div className="carrousel-container">
      <div className="carrousel">
        <div
          className="carrousel-inner"
          style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        >
          {pictures.map((slide, index) => (
            <div className="carrousel-item">
              <img src={slide} alt="vue intérieur d'un logement" key={index} />
            </div>
          ))}
        </div>
        <span className="carrousel-number">
          {currentSlide + 1}/{pictures.length}
        </span>
        <CarrouselControls prev={prev} next={next} />
      </div>
    // </div>
  )
}

export default Carrousel
