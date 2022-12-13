import React, { useState } from 'react'
import arrow_up from '../images/arrow_up.svg'
import arrow_down from '../images/arrow_down.svg'
import '../styles/dropdown.css'

function Dropdown({ txt, title, array }) {
  const [showDropdown, setShowDropdown] = useState(false)
  return showDropdown ? (
    <div className="dropdown-box">
      <button
        onClick={() => setShowDropdown(false)}
        className="dropdown-button"
      >
        <h2 className="dropdown-title">{title}</h2>
        <img className="arrow" src={arrow_up} alt="Flèche vers le haut" />
      </button>
      {array ? (
        <div className="dropdown-text">
          {array.map((equipment, key) => (
            <ul key={key}>
              <li>{equipment}</li>
            </ul>
          ))}
        </div>
      ) : (
        <p className="dropdown-text">{txt}</p>
      )}
    </div>
  ) : (
    <div className="dropdown-box">
      <button onClick={() => setShowDropdown(true)} className="dropdown-button">
        <h2 className="dropdown-title">{title}</h2>
        <img className="arrow" src={arrow_down} alt="Flèche vers le bas" />
      </button>
    </div>
  )
}
export default Dropdown
