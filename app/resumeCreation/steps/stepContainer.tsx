import React from 'react'

interface StepContainer {
    children?:React.ReactNode;
}

const StepContainer:React.FC<StepContainer> = ({children}) => {
  return (
    <div className='h-600 overflow-y-scroll no-scrollbar bg-white mt-2 pb-11' style={{height:'90%'}}>
        {children}
    </div>
  )
}

export default StepContainer;
