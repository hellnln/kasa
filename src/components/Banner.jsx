import '../styles/banner.css'

export default function Banner({ imgDesktop, imgMobile, imgHome }) {
    return (
        <section className="banner">
<img
  className="img_desktop"
  src={imgDesktop}
  alt="Vue panoramique d'une montagne desktop"
/>
<img
  className="img_mobile"
  src={imgMobile}
  alt="Vue panoramique d'une montagne mobile"
/>
{/* <img
  className="img_home"
  src={imgHome}
  alt="Vue panoramique d'une montagne"
/> */}
</section>
    )
}