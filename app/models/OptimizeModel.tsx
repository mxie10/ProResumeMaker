import React from 'react'
import useOptimizeExpModel from '../hooks/useOptimizeExpModel';
import { IoMdCloseCircle } from "react-icons/io";

interface OptimizeModel {
  body?:React.ReactElement;
}

const OptimizeModel:React.FC<OptimizeModel> = (props) => {

  const {body} = props;
  const optimizeExpModel = useOptimizeExpModel();
  const modalClasses = optimizeExpModel.isOpen ? '-translate-x-full'  : 'translate-x-0';

  const onClose = () => {
    optimizeExpModel.onClose();
  }

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
          bg-white
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
        `}>
          <div className='mt-2 ml-2 cursor-pointer w-full'>
            <IoMdCloseCircle size={20} onClick={onClose} />
          </div>
          {body}
      </div>
    </>
  )
}

export default OptimizeModel;
