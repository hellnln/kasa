import '../styles/banner.css'

export default function Banner({ img }) {
  return (
    <section className="banner">
      <img
        className="img-banner"
        src={img}
        alt="Vue panoramique d'une montagne"
      />
    </section>
  )
}
