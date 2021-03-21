import ExternalVideos from '../../components/ExternalVideos/ExternalVideos'
import Polygon from '../../components/Polygon/Polygon'
import Illustrations from '../../components/Illustrations/Illustrations'
import BorderedTextBox from '../../components/BorderedTextBox/BorderedTextBox'
import { TEXT } from '../../utils/constants'
import './Portfolio.scss'

function Portfolio() {
  return (
    <section id='portfolio' className='portfolio'>
      <div><span /><span /></div>
      <div className='flex-center title'>
        <h1>{TEXT.PORTFOLIO}</h1>
        <Polygon isSideSquare />
        <span />
      </div>
      <div className='flex-center subtitle'>
        {TEXT.PORTFOLIO_SUBTITLE}
        <Polygon isSideSquare />
      </div>
      <div className='videos-subsection'>
        <ExternalVideos />
      </div>
      <div className='illustrations'>
        <div className='flex-center illustrations-title'>
          <div className='flex-center illustrations-title-left'>
            <span />
            <Polygon isSideSquare />
            {TEXT.ILLUSTRATIONS}
          </div>
          <BorderedTextBox text={TEXT.ILU1}
            yellowBoxStyle={{
              padding: '10px 10px 20px 25px'
            }}
            greyBoxStyle={{
              maxWidth: '300px',
              minHeight: '130px',
              margin: '-35px -40px 0 0',
              paddingRight: '35px'
            }} />
          <span />
        </div>
        <Illustrations />
      </div>
    </section>
  )
}

export default Portfolio