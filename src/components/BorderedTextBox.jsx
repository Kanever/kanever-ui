import './BorderedTextBox.scss'

function BorderedTextBox({ text, width, height }) {
  const customStyle = {
    width,
    height
  }
  return (
    <div className='bordered-text-box' style={customStyle}>{text}</div>
  )
}

export default BorderedTextBox