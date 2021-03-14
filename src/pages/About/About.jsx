import Polygon from '../../components/Polygon/Polygon'
import BorderedTextBox from '../../components/BorderedTextBox/BorderedTextBox'
import ProgressIndicator from '../../components/ProgressIndicator/ProgressIndicator'
import Experience from './Experience/Experience'
import { TEXT } from '../../utils/constants'
import './About.scss'

function About() {
  return (
    <section id='about' className='about'>
      <div className='main-about'>
        <div className='title'>
          <span />
          <Polygon isSideSquare />
          <h1>{TEXT.ABOUT}</h1>
        </div>
        <div className='description'>
          <BorderedTextBox
            text={TEXT.ABT1}
            />
          <div className='secondary-text'>
            <p>{TEXT.ABT2}</p>
            <p>{TEXT.ABT3}</p>
          </div>
        </div>
        <div className='knowledge-title'>
          <span />
          <div>
            <Polygon isSideSquare />
            <h3>{TEXT.KNOWLEDGE}</h3>
          </div>
          <span />
        </div>
      </div>
      <span />
      <div className='knowledge-wrapper'>
        <div>
          <ProgressIndicator percentage={92} title={'AFTER EFFECTS'} />
          <ProgressIndicator percentage={85} title={'PREMIERE'} />
          <ProgressIndicator percentage={96} title={'PHOTOSHOP'} />
          <ProgressIndicator percentage={70} title={'ILLUSTRATOR'} />
        </div>
        <div className='knowledge-description'>
          <BorderedTextBox
            text={TEXT.KNW1}
          />
        </div>
      </div>
      <Experience/>
    </section>
  )
}

export default About