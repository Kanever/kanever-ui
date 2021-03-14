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
              yellowBoxStyle={{}}
              greyBoxStyle={{
                maxWidth: '500px',
                minHeight: '255px'
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
              yellowBoxStyle={{}}
              greyBoxStyle={{
                maxWidth: '360px',
                minHeight: '165px'
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
              yellowBoxStyle={{}}
              greyBoxStyle={{
                maxWidth: '315px',
                minHeight: '285px'
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
              yellowBoxStyle={{}}
              greyBoxStyle={{
                maxWidth: '300px',
                minHeight: '190px'
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
              yellowBoxStyle={{}}
              greyBoxStyle={{
                maxWidth: '615px',
                minHeight: '200px'
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
              yellowBoxStyle={{}}
              greyBoxStyle={{
                maxWidth: '445px',
                minHeight: '155px'
              }}
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