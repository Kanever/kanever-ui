import ExternalVideos from '../components/ExternalVideos'
import Polygon from '../components/Polygon'
import Illustrations from '../components/Illustrations'
import BorderedTextBox from '../components/BorderedTextBox'
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
      <div className='videos-subsection'>
        <ExternalVideos />
      </div>
      <div className='illustrations'>
        <div className='illustrations-title'>
          <div className='illustrations-title-left'>
            <span/>
            <Polygon isSideSquare/>
            ILLUSTRACOES
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