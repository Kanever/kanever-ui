function Illustration({ full, thumb, alt }) {
  return (
    <a href={full}>
      <img src={thumb} alt={alt} />
    </a>
  )
}
export default Illustration