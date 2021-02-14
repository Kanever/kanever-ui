import HomeOption from '../components/HomeOption'
import './Home.scss'

function Home() {
  return (
    <section id='home' className='home'>
      <div>
        <HomeOption text='SOBRE' redirectToId='about'/>
        <HomeOption text='PORTFOLIO' redirectToId='portfolio'/>
        <HomeOption text='CONTATO' redirectToId='contact'/>
      </div>
    </section>
  )
}

export default Home