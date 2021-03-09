import ExternalVideos from '../components/ExternalVideos'
import Polygon from '../components/Polygon'
import Illustrations from '../components/Illustrations'
import BorderedTextBox from '../components/BorderedTextBox'
import './Portfolio.scss'

function Portfolio() {
  return (
    <section id='portfolio' className='portfolio'>
      <div><span /><span /></div>
      <div className='flex-center title'>
        <h1>PORTF&Oacute;LIO</h1>
        <Polygon isSideSquare />
        <span />
      </div>
      <div className='flex-center subtitle'>
        VIDEOS&nbsp;/&nbsp;AUDIOVISUAL
        <Polygon isSideSquare />
      </div>
      <div className='videos-subsection'>
        <ExternalVideos />
      </div>
      <div className='illustrations'>
        <div className='flex-center illustrations-title'>
          <div className='flex-center illustrations-title-left'>
            <span/>
            <Polygon isSideSquare/>
            ILUSTRA&Ccedil;&Otilde;ES
          </div>
          <BorderedTextBox
            text='Veja minha galeria de concept art, estudos, entre outros materiais de design gráfico.'
          />
          <span/>
        </div>
        <Illustrations />
      </div>
    </section>
  )
}

export default Portfolio