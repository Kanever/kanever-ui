import './BorderedTextBox.scss'

function BorderedTextBox({ text, yellowBoxStyle, greyBoxStyle }) {
  const yellowBoxClass = yellowBoxStyle ? '' : 'default-yellow-box-style'
  const greyBoxClass = greyBoxStyle ? '' : 'default-grey-box-style'

  return (
    <div className={`bordered-text-box ${yellowBoxClass}`} style={yellowBoxStyle}>
      <div className={greyBoxClass} style={greyBoxStyle}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default BorderedTextBox