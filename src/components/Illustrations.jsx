import { useState } from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
import MoreButton from './MoreButton'
import Illustration from './Illustration'
import { images } from '../utils/constants'
import './Illustrations.scss'

function Illustrations() {
  const [nImages, setNImages] = useState(8)
  const options = {
    // settings: {},
    // caption: {},
    // buttons: {},
    // thumbnails: {},
    // progressBar:{}
  }

  function getImages() {
    return images
      .map(({ full, thumb, alt }) => <Illustration full={full} thumb={thumb} alt={alt} />)
      .slice(0, nImages)
  }

  function handleClick() {
    setNImages(nImages + 4)
  }

  return (
    <>
      <div className='illustrations-wrapper'>
        <SRLWrapper options={options}>
          {getImages()}
        </SRLWrapper>
      </div>
      <MoreButton text='MAIS ILUSTRAS' onClick={handleClick} />
    </>
  )
}
export default Illustrations