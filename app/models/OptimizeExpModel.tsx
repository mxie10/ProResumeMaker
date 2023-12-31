import React from 'react'
import { useGlobalContext } from '../context/useContext';
import WorkExpOptSec from './component/WorkExpOptSec';
import useOptimizeExpModel from '../hooks/useOptimizeExpModel';
import OptimizeModel from './OptimizeModel';

type WorkExperience = {
  company: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  description: string;
  generatedPhrase: Array<string>;
}

const OptimizeExpModel = () => {

  const { watch, setValue } = useGlobalContext();
  const workExperience = watch('workExperience');
  const optimizeExpModel = useOptimizeExpModel();

  const mainBody = (
    <>
      {workExperience.map((item: WorkExperience, expIndex: number) => {
        return (
          <div className={`${expIndex === 0 ? 'mt-2' : 'mt-4'} relative`} key={expIndex}>
            <WorkExpOptSec expIndex = {expIndex}/>
          </div>
        )
      })}
    </>
  )

  const onClose = () => {
    optimizeExpModel.onClose();
  }

  const bodyContent = (
    <div className='flex flex-col'>
      <div className='flex flex-col w-full h-screen' >
        <div
          className='
              text-xl 
              font-bold 
              w-full 
              text-center 
              border-b-2 
              border-neutral-100
            '
          style={{ height: '4%' }}
        >
          Optimize Work Experience
        </div>
        <div className='px-4 py-2 overflow-auto' style={{ height: '90%' }}>
          <div className=''>
            {mainBody}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <OptimizeModel
      body={bodyContent}
      isOpen={optimizeExpModel.isOpen}
      onClose={onClose}
    />
  )
}

export default OptimizeExpModel;
