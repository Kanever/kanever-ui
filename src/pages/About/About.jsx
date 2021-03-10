import Polygon from '../../components/Polygon/Polygon'
import BorderedTextBox from '../../components/BorderedTextBox/BorderedTextBox'
import ProgressIndicator from '../../components/ProgressIndicator/ProgressIndicator'
import './About.scss'

function About() {
  return (
    <section id='about' className='about'>
      <div className='main-about'>
        <div className='title'>
          <span />
          <Polygon isSideSquare />
          <h1>SOBRE</h1>
        </div>
        <div className='description'>
          <BorderedTextBox text='Olá! Sou Marcelo Canever, Freelancer, Motion Designer, ilustrador, diretor e coordenador de projetos audiovisuais.' />
          <div className='secondary-text'>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Conhecimentos em produção audio visuais e peças gráficas, desde as primeiras etapas de conceituais até a finalização do material.</p>
            <p>Roteiro, Storyboard, Animatics, Concept Arts, Identidade Visual, Animação Tradicional, Motion Graphic, Edição, Pós-Produção, Edição de Audio/Sound effects.</p>
          </div>
        </div>
        <div className='knowledge-title'>
          <span />
          <div>
            <Polygon isSideSquare />
            <h3>CONHECIMENTOS</h3>
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
      </div>
    </section>
  )
}

export default About