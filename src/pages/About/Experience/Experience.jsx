import BorderedTextBox from '../../../components/BorderedTextBox/BorderedTextBox'
import Polygon from '../../../components/Polygon/Polygon'
import { TEXT } from '../../../utils/constants'
import './Experience.scss'

function Experience() {
  return (
    <div className='experience-wrapper'>
      <div className='experience-title'>
      </div>
      <div className='experience-content'>
        <div className='experience-content-left'>
          <div>
            <BorderedTextBox
              text={TEXT.EXP1}
            />
            <span/>
            <Polygon />
          </div>
          <div>
            <BorderedTextBox
              text={TEXT.EXP3}
            />
          </div>
          <div>
            <BorderedTextBox
              text={TEXT.EXP5}
            />
          </div>
        </div>
        <div className='experience-content-right'>
          <div>
            <BorderedTextBox
              text={TEXT.EXP2}
            />
          </div>
          <div>
            <BorderedTextBox
              text={TEXT.EXP4}
            />
          </div>
          <div>
            <BorderedTextBox
              text={TEXT.EXP6}
            />
          </div>
        </div>
      </div>
      <div className='experience-bottom'>

      </div>
    </div>
  )
}
export default Experience