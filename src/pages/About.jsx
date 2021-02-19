import Polygon from '../components/Polygon'
import BorderedTextBox from '../components/BorderedTextBox'
import './About.scss'

function About() {
  return (
    <section id='about' className='about'>
      <div>
        <div className='title'>
          <Polygon isSideSquare />
          <h1>SOBRE</h1>
        </div>
        <div className='main-about'>
          <BorderedTextBox text='Olá! Sou Marcelo Canever, Freelancer, Motion Designer, ilustrador, diretor e coordenador de projetos audiovisuais.' />
        </div>
      </div>
    </section>
  )
}

export default About