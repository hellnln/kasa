import '../styles/banner.css'

export default function Banner({ img, alt }) {
  return (
    <div className="banner">
      <img
        className="img-banner"
        src={img}
        alt={alt}
      />
     </div>
  )
}
