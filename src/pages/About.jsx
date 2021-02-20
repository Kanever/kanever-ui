import Polygon from '../components/Polygon'
import BorderedTextBox from '../components/BorderedTextBox'
import './About.scss'

function About() {
  return (
    <section id='about' className='about'>
      <div>
        <div className='title'>
          <span />
          <Polygon isSideSquare />
          <h1>SOBRE</h1>
        </div>
        <div className='main-about'>
          <BorderedTextBox text='Olá! Sou Marcelo Canever, Freelancer, Motion Designer, ilustrador, diretor e coordenador de projetos audiovisuais.' />
          <div className='secondary-text'>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Conhecimentos em produção audio visuais e peças gráficas, desde as primeiras etapas de conceituais até a finalização do material.</p>
            <p>Roteiro, Storyboard, Animatics, Concept Arts, Identidade Visual, Animação Tradicional, Motion Graphic, Edição, Pós-Produção, Edição de Audio/Sound effects.</p>
          </div>
        </div>
        <div className='knowledge-wrapper'>
          <span />
          <div>
            <Polygon isSideSquare />
            <h3>CONHECIMENTOS</h3>
          </div>
          <span />
        </div>
      </div>
      <span />
      <div className=''>

      </div>
    </section>
  )
}

export default About