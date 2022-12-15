import React from 'react'
import arrowNext from '../../images/arrow_forward.svg'
import arrowPrev from '../../images/arrow_back.svg'

function CreateControls({ prev, next }) {
  return (
    <div>
      <button className="carrousel-control left" onClick={prev}>
        <img src={arrowPrev} alt="Flèche vers la gauche" />
      </button>
      <button className="carrousel-control right" onClick={next}>
        <img src={arrowNext} alt="Flèche vers la droite" />
      </button>
    </div>
  )
}

export default CreateControls
