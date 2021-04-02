import { BsEnvelope } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im'
import Polygon from "../../components/Polygon/Polygon"
import BorderedTextBox from "../../components/BorderedTextBox/BorderedTextBox";
import { TEXT } from '../../utils/constants'
import './Contact.scss'

function Contact() {
  return (
    <section id='contact' className='contact'>
      <div>
        <div className='contact-title'>
          <Polygon isSideSquare />
          <h1>{TEXT.CONTACT}</h1>
          <span />
        </div>
        <div className='contact-description'>
          <BorderedTextBox
            text={TEXT.CNT1} />
        </div>
      </div>
      <div className='contact-filter'>
        <div className='flex-center contact-filter-left'>
          <span>{TEXT.INFORMATION}</span>
          <div className='contact-filter-list'>
            <span />
            <ul>
              <li>
                <span />
                <Polygon color='#DCDBD6' />
                <a className='flex-center contact-link word-break-all' href={`mailto:${TEXT.KAN_EMAIL}`}>
                  <BsEnvelope className='contact-icon'/>
                  {TEXT.KAN_EMAIL}
                </a>
              </li>
              <li>
                <span />
                <Polygon color='#DCDBD6' />
                <a className='flex-center contact-link'href='https://wa.me/5511998904435' >
                  <ImWhatsapp className='contact-icon'/>
                  {TEXT.KAN_PHONE}
                </a>
              </li>
              <li>
                <span />
                <Polygon color='#DCDBD6' />
                <a className='flex-center contact-link' href='https://www.instagram.com/follow.kanever/'>
                  <FaInstagram className='contact-icon'/>
                  {TEXT.KAN_INSTA}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span />
    </section>
  )
}

export default Contact