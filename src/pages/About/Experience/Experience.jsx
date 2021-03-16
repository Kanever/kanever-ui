import BorderedTextBox from '../../../components/BorderedTextBox/BorderedTextBox'
import Polygon from '../../../components/Polygon/Polygon'
import { TEXT } from '../../../utils/constants'
import './Experience.scss'

function Experience() {
  return (
    <div className='experience-wrapper'>
      <div className='experience-title'>
        <span />
        <div>
          <h3>{TEXT.EXPERIENCE}</h3>
          <Polygon isSideSquare />
        </div>
        <span />
      </div>
      <div className='experience-content'>
        <div className='experience-content-left'>
          <div>
            <BorderedTextBox
              text={TEXT.EXP1}
              yellowBoxStyle={{
                padding: '3px 15px 15px 0'
              }}
              greyBoxStyle={{
                maxWidth: '420px',
                minHeight: '270px',
                margin: '-25px 0 0 -35px',
                paddingLeft: '35px'
              }}
            />
            <div className='content-branch'>
              <span />
              <Polygon isSideSquare fill={'#FFD029'} />
            </div>
          </div>
          <div>
            <BorderedTextBox
              text={TEXT.EXP3}
              yellowBoxStyle={{
                padding: '2px 25px 20px 0'
              }}
              greyBoxStyle={{
                maxWidth: '320px',
                minHeight: '185px',
                margin: '-30px 0 0 -30px',
                paddingLeft: '15px'
              }}
            />
            <div className='content-branch'>
              <span />
              <Polygon isSideSquare fill={'#FFD029'} />
            </div>
          </div>
          <div>
            <BorderedTextBox
              text={TEXT.EXP5}
              yellowBoxStyle={{
                padding: '15px 23px 23px 15px'
              }}
              greyBoxStyle={{
                maxWidth: '255px',
                minHeight: '300px',
                margin: '-40px 0 0 -40px',
                paddingLeft: '30px'
              }}
            />
            <div className='content-branch'>
              <span />
              <Polygon isSideSquare fill={'#FFD029'} />
            </div>
          </div>
        </div>
        <div className='experience-content-right'>
          <div>
            <div className='content-branch'>
              <Polygon isSideSquare fill={'#FFD029'} />
              <span />
            </div>
            <BorderedTextBox
              text={TEXT.EXP2}
              yellowBoxStyle={{
                padding: '15px 20px 15px 20px'
              }}
              greyBoxStyle={{
                maxWidth: '255px',
                minHeight: '210px',
                margin: '-40px 0 0 -40px',
                paddingLeft: '10px'
              }}
            />
          </div>
          <div>
            <div className='content-branch'>
              <Polygon isSideSquare fill={'#FFD029'} />
              <span />
            </div>
            <BorderedTextBox
              text={TEXT.EXP4}
              yellowBoxStyle={{
                padding: '15px 15px 15px 25px'
              }}
              greyBoxStyle={{
                maxWidth: '550px',
                minHeight: '210px',
                margin: '-40px -40px 0 0',
                paddingRight: '25px'
              }}
            />
          </div>
          <div>
            <div className='content-branch'>
              <Polygon isSideSquare fill={'#FFD029'} />
              <span />
            </div>
            <BorderedTextBox
              text={TEXT.EXP6}
              yellowBoxStyle={{
                padding: '15px 15px 15px 25px'
              }}
              greyBoxStyle={{
                maxWidth: '380px',
                minHeight: '155px',
                margin: '-40px -60px 0 0',
                paddingRight: '40px'
              }}
            />
          </div>
        </div>
      </div>
      <div className='experience-bottom'>
        <div><div/></div><span/>
      </div>
    </div>
  )
}
export default Experience