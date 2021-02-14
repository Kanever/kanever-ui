import './HomeOption.scss'

function HomeOption({ text, redirectToId }) {
  return (
    <a className='home-option' href={`#${redirectToId}`}>
      <svg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='9.15686' y='2.82843' width='8.94974' height='8.94974' transform='rotate(45 9.15686 2.82843)' stroke='white' strokeWidth='4'/>
      </svg>
      <span>
        {text}
      </span>
    </a>
  )
}

export default HomeOption