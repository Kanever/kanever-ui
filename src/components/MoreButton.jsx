import Polygon from '../components/Polygon'
import './MoreButton.scss'

function MoreButton({ text, onClick = () => alert('Comming soon ;)!') }) {
  return (
    <div className='more-button'>
      <span />
      <Polygon isSideSquare color='#EDEDED' />
      <button type='button' onClick={onClick}>{text}</button>
      <Polygon isSideSquare color='#EDEDED' />
      <span />
    </div>
  )
}

export default MoreButton