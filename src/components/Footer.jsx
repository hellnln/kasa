

import '../styles/footer.css';
import logoWhite from '../images/LOGO_white.svg';


function Footer() {
    return(
         <div className="footer">
    <img className="footer-logo" src={logoWhite} alt="Logo Kasa blanc" />
    <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
  </div>
    )
 
}

export default Footer
