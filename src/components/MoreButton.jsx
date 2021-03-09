import Polygon from '../components/Polygon'
import './MoreButton.scss'

function MoreButton({ text, onClick = () => alert('Comming soon ;)!') }) {
  return (
    <div className='flex-center more-button'>
      <span />
      <Polygon isSideSquare color='#DCDBD6' />
      <button type='button' onClick={onClick}>{text}</button>
      <Polygon isSideSquare color='#DCDBD6' />
      <span />
    </div>
  )
}

export default MoreButton