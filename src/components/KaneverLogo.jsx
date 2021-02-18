import './KaneverLogo.scss'

function KaneverLogo({ className = '' }) {
  return (
    <div className={`kanever-logo ${className}`}>
      <svg viewBox='200 0 902.5 898.22'>
        <polygon className='st0' points='379.2,443.95 429.83,393.51 809.81,14.97 809.81,874.34 430.31,495.04 		' />
        <polygon className='st0' points='379.01,184.63 451.25,184.63 451.25,311.25 451.25,332.97 451.25,558.34 451.25,578.41 
        451.25,705.03 379.01,705.03 		' />
        <polygon className='st1' points='427.49,443.95 858.11,14.97 858.11,874.34 		' />
        <polygon className='st2' points='451.25,444.1 712.16,184.18 712.16,704.87 		' />
      </svg>
    </div>
  )
}
export default KaneverLogo