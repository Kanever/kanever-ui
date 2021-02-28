import ExternalVideos from '../components/ExternalVideos'
import Polygon from '../components/Polygon'
import './Portfolio.scss'

function Portfolio() {
  return (
    <section id='portfolio' className='portfolio'>
      <div><span /><span /></div>
      <div className='title'>
        <h1>PORTF&Oacute;LIO</h1>
        <Polygon isSideSquare />
        <span />
      </div>
      <div className='subtitle'>
        VIDEOS&nbsp;/&nbsp;AUDIOVISUAL
        <Polygon isSideSquare />
      </div>
      <div className='video-filter'>
        <span>FILTRO</span><span />
        <ul>
          <li>
            <span />
            <Polygon color='#DCDBD6' />
            MOTION GRAPHICS
          </li>
          <li>
            <span />
            <Polygon color='#DCDBD6' />
            WHITEBOARD
          </li>
          <li>
            <span />
            <Polygon color='#DCDBD6' />
            MOTION GRAPHICS
          </li>
        </ul>
        <div className='portfolio-description'>
          <p>Confira alguns dos melhores e mais recentes trabalhos produzidos por mim, com parcerias e participações de outros profissionais e produtoras</p>
        </div>
        <span />
      </div>
      <span />
      <ExternalVideos />
    </section>
  )
}

export default Portfolio