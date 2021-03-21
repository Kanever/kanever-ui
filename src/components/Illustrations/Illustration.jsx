function Illustration({ full, thumb, alt }) {
  return (
    <a href={full}>
      <img className='thumb' src={thumb} alt={alt} />
    </a>
  )
}
export default Illustration