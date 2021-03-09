import HomeOption from '../components/HomeOption'
import KaneverLogo from '../components/KaneverLogo'
import './Home.scss'

function Home() {
  return (
    <section id='home' className='flex-center home'>
      <h1>KANEVER</h1>
      <KaneverLogo className='logo' />
      <div>
        <HomeOption text='SOBRE' redirectToId='about'/>
        <HomeOption text='PORTF&Oacute;LIO' redirectToId='portfolio'/>
        <HomeOption text='CONTATO' redirectToId='contact'/>
      </div>
    </section>
  )
}

export default Home