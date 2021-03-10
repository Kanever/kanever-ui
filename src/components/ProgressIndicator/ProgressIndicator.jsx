import './ProgressIndicator.scss'

function ProgressIndicator({ percentage = 0, title }) {
  const filledBar = {
    minWidth: `${percentage}%`
  }
  return (
    <div className='progress-indicator-wrapper'>
      <div className='progress-indicator'>
        <div style={filledBar} />
      </div>
      {title}
    </div>
  )
}
export default ProgressIndicator