import HomeOption from '../../components/HomeOption/HomeOption'
import KaneverLogo from '../../components/KaneverLogo/KaneverLogo'
import { TEXT } from '../../utils/constants'
import './Home.scss'

function Home() {
  return (
    <section id='home' className='flex-center home'>
      <h1>{TEXT.KANEVER}</h1>
      <KaneverLogo className='logo' />
      <div>
        <HomeOption text={TEXT.ABOUT} redirectToId='about'/>
        <HomeOption text={TEXT.PORTFOLIO} redirectToId='portfolio'/>
        <HomeOption text={TEXT.CONTACT} redirectToId='contact'/>
      </div>
    </section>
  )
}

export default Home