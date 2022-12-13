
import '../styles/carrousel.css'

function Carrousel( { pictures } ) {

    
    return (
        <div className="carrousel-container">
            <div className="carrousel">
                <div className="carrousel-inner">
                {pictures.map((slide, index) => (
                    <div className='carrousel-item'>
                        <img src={slide} alt="vue intérieur d'un logement" key={index} />
                    </div>
                ))}
                </div>

            </div>

        </div>
    )
}

export default Carrousel