import { useState } from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
import MoreButton from '../MoreButton/MoreButton'
import Illustration from './Illustration'
import { images, TEXT } from '../../utils/constants'
import './Illustrations.scss'

function Illustrations() {
  const maxIllustrations = 8
  const [nImages, setNImages] = useState(maxIllustrations)

  function getImages() {
    return images
      .map(({ full, thumb, alt }, i) => <Illustration key={i} full={full} thumb={thumb} alt={alt} />)
      .slice(0, nImages)
  }

  function handleClick() {
    nImages >= images.length
      ? alert(TEXT.ALERT_NO_MORE_ILLUSTRATIONS)
      : setNImages(nImages + maxIllustrations)
  }

  return (
    <>
      <div className='illustrations-wrapper'>
        <SRLWrapper>
          {getImages()}
        </SRLWrapper>
      </div>
      <MoreButton text={TEXT.MORE_ILLUSTRATIONS} onClick={handleClick} />
    </>
  )
}
export default Illustrations