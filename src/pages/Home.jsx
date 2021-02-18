import HomeOption from '../components/HomeOption'
import KaneverLogo from '../components/KaneverLogo'
import './Home.scss'

function Home() {
  return (
    <section id='home' className='home'>
      <h1>KANEVER</h1>
      <KaneverLogo />
      <div>
        <HomeOption text='SOBRE' redirectToId='about'/>
        <HomeOption text='PORTFOLIO' redirectToId='portfolio'/>
        <HomeOption text='CONTATO' redirectToId='contact'/>
      </div>
    </section>
  )
}

export default Home