import './Polygon.scss'

function Polygon({ isSideSquare, color = '#FFD029' }) {
  const square = <div><svg width='30' height='30' viewBox='0 0 30 30' fill='none'>
    <rect x='5.82843' y='7' width='17' height='17' stroke={color} strokeWidth='4' />
  </svg></div>
  const sideSquare = <div><svg width='30' height='30' viewBox='0 0 30 30' fill='none'>
    <rect x='2.82843' y='14.8492' width='17' height='17' transform='rotate(-45 2.82843 14.8492)' stroke={color} strokeWidth='4' />
  </svg></div>

  return (
    <span className='polygon'>{isSideSquare && sideSquare || square}</span>
  )
}

export default Polygon