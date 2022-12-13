import star_full from '../images/star_full.svg'
import star_empty from '../images/star_empty.svg'


function Rating(rate) {

const range = [1, 2, 3, 4, 5];

    return range.map((rangeElement, key) => 
        rangeElement <= rate.rate ? (
            <img className='rating-img' src={star_full} alt='etoile pleine' key={key} />
        ) : (
            <img className='rating-img' src={star_empty} alt='etoile vide' key={key} />
        )
    )

}

export default Rating