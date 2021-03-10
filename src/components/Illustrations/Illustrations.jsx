import { useState } from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
import MoreButton from '../MoreButton/MoreButton'
import Illustration from './Illustration'
import { images } from '../../utils/constants'
import './Illustrations.scss'

function Illustrations() {
  const [nImages, setNImages] = useState(4)

  function getImages() {
    return images
      .map(({ full, thumb, alt }) => <Illustration full={full} thumb={thumb} alt={alt} />)
      .slice(0, nImages)
  }

  function handleClick() {
    nImages >= images.length
      ? alert('Sem mais imagens disponíveis!')
      : setNImages(nImages + 4)
  }

  return (
    <>
      <div className='illustrations-wrapper'>
        <SRLWrapper>
          {getImages()}
        </SRLWrapper>
      </div>
      <MoreButton text='MAIS ILUSTRAS' onClick={handleClick} />
    </>
  )
}
export default Illustrations