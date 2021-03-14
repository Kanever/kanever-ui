import './BorderedTextBox.scss'

function BorderedTextBox({ text, yellowBoxMargin, greyBoxMargin }) {
  let yellowBoxStyle = {
    margin: '-4px 0 0 -4px'
  }
  let greyBoxStyle = {
    margin: '-5px -50px -20px -5px'
  }
  if (yellowBoxMargin) {
    yellowBoxStyle = {
      margin: `${yellowBoxMargin[0]} ${yellowBoxMargin[1]} ${yellowBoxMargin[2]} ${yellowBoxMargin[3]}`
    }
  }
  if (greyBoxMargin) {
    greyBoxStyle = {
      margin: `${greyBoxMargin[0]} ${greyBoxMargin[1]} ${greyBoxMargin[2]} ${greyBoxMargin[3]}`
    }
  }

  return (
    <div className='bordered-text-box' style={yellowBoxStyle}>
      <div style={greyBoxStyle}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default BorderedTextBox