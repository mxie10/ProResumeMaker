import React, { useEffect, useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";

interface OptimizeModelProps {
  body?:React.ReactElement;
  isOpen?:boolean;
  onClose?:() => void;
}

const OptimizeModel:React.FC<OptimizeModelProps> = (props) => {
  const {body,isOpen,onClose} = props;
  const [showModal, setShowModal] = useState(isOpen);
  const modalClasses = showModal? '-translate-x-full'  : 'translate-x-0';

  useEffect(()=>{
    setShowModal(isOpen);
  },[isOpen])

  return (
    <>
      <div 
        className={`
          fixed 
          h-screen
          mt-18
          w-full
          lg:w-1/2 
          -right-full
          lg:-right-1/2 
          z-10 
          rounded-lg 
          border-2 
          shadow-md 
          border-neutral-200
          transform 
          ${modalClasses} 
          transition-transform 
          duration-300 
          ease-in-out
          bg-white
        `}>
          <div className='mt-2 ml-2 cursor-pointer w-full'>
            <IoMdCloseCircle size={20} onClick={()=>onClose?.()} />
          </div>
          {body}
      </div>
    </>
  )
}

export default OptimizeModel;
