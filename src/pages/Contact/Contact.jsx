import { BsEnvelope } from 'react-icons/bs'
import { FiPhone } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import Polygon from "../../components/Polygon/Polygon"
import BorderedTextBox from "../../components/BorderedTextBox/BorderedTextBox";
import './Contact.scss'

function Contact() {
  return (
    <section id='contact' className='contact'>
      <div>
        <div className='contact-title'>
          <Polygon isSideSquare />
          <h1>CONTATO</h1>
          <span />
        </div>
        <div className='contact-description'>
          <BorderedTextBox text='Olá! Sou Marcelo Canever, Freelancer, Motion Designer, ilustrador, diretor e coordenador de projetos audiovisuais.' />
        </div>
      </div>
      <div className='contact-filter'>
        <div className='flex-center contact-filter-left'>
          <span>INFORMA&Ccedil;&Otilde;ES</span>
          <span />
          <ul>
            <li>
              <span />
              <Polygon color='#DCDBD6' />
              <div className='flex-center work-breaka-all'>
                <BsEnvelope />
                contato.marcelo.canever@gmail.com
              </div>
            </li>
            <li>
              <span />
              <Polygon color='#DCDBD6' />
              <div className='flex-center'>
                <FiPhone />
                (11) 9 9890-4435
              </div>
            </li>
            <li>
              <span />
              <Polygon color='#DCDBD6' />
              <div className='flex-center'>
                <FaInstagram />
                @follow.kanever
              </div>
            </li>
          </ul>
        </div>
      </div>
      <span/>
    </section>
  )
}

export default Contact