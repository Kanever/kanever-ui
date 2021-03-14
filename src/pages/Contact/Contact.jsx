import { BsEnvelope } from 'react-icons/bs'
import { FiPhone } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
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
          <span />
          <ul>
            <li>
              <span />
              <Polygon color='#DCDBD6' />
              <div className='flex-center work-breaka-all'>
                <BsEnvelope />
                {TEXT.KAN_EMAIL}
              </div>
            </li>
            <li>
              <span />
              <Polygon color='#DCDBD6' />
              <div className='flex-center'>
                <FiPhone />
                {TEXT.KAN_PHONE}
              </div>
            </li>
            <li>
              <span />
              <Polygon color='#DCDBD6' />
              <div className='flex-center'>
                <FaInstagram />
                {TEXT.KAN_INSTA}
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