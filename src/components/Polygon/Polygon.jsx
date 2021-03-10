import './Polygon.scss'

function Polygon({ isSideSquare, color = '#FFD029', fill = 'none' }) {
  const square = <svg width='30' height='30' viewBox='0 0 30 30' fill='none'>
    <rect fill={fill} x='5.82843' y='7' width='17' height='17' stroke={color} strokeWidth='4' />
  </svg>
  const sideSquare = <svg width='30' height='30' viewBox='0 0 30 30' fill='none'>
    <rect fill={fill} x='2.82843' y='14.8492' width='17' height='17' transform='rotate(-45 2.82843 14.8492)' stroke={color} strokeWidth='4' />
  </svg>

  return (
    <div className='polygon'>{isSideSquare && sideSquare || square}</div>
  )
}

export default Polygon