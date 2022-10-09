import backdropTypes from "../types/backdropTypes"

const Backdrop = ({children,onClick}:backdropTypes) => {
  return (
    <div onClick={onClick} className="z-[999] absolute w-screen h-screen bg-[#00000088] top-0 left-0 flex justify-center items-center">
        {children}
    </div>
  )
}

export default Backdrop