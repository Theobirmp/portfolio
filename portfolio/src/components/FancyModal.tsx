import Backdrop from './Backdrop'
import Modal from './Modal'
import fancyodalPropTypes from '../types/fancyModalType'


const FancyModal = ({modalOpen,setModalOpen}:fancyodalPropTypes) => {
    const handleClick=()=>{
        modalOpen?setModalOpen(false):setModalOpen(true)
    }
  return (
    <>
    {modalOpen?
    (<Backdrop onClick={handleClick}>
        <Modal onClick={handleClick}/>
    </Backdrop>):
    (<></>)}
    </>
  )
}

export default FancyModal