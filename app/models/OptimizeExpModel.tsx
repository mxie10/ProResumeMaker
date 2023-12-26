import React from 'react'
import OptimizeModel from './OptimizeModel';
import { useGlobalContext } from '../context/useContext';
import CustomizedDropDown from '../component/input/DropDown';

const OptimizeExpModel = () => {

  const { watch, setValue } = useGlobalContext();
  const workExperience = watch('workExperience');

  const phraseBody = (
    <>
      <div className='text-md font-bold'>
        Add Pre-generated Phrase<span className=' text-neutral-500'>(Optional)</span>
      </div>
      <div className='text-sm text-neutral-500'>
        Utilizes AI to craft brief, impactful phrases summarizing your work experiences. Effortlessly communicate your career highlights and expertise with tailored precision.
      </div>
      <div>
        <div className='mt-2'>
          <CustomizedDropDown menuItem={workExperience}/>
        </div>
        {workExperience.map((item: Object, index: number) => {
          return (
            <div 
              className='
                h-300 
                overflow-auto 
                w-full 
                bg-slate-200 
                mt-2
                rounded-lg
              '
            >
              <div>Utilizes AI to craft brief, impactful phrases summarizing your </div>
            </div>
          )
        })}
      </div>
    </>
  )

  const body = (
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
          style={{height:'4%'}}
        >
          Optimize Work Experience
        </div>
        <div className='px-4 py-2 overflow-auto bg-red-200'  style={{height:'90%'}}>
          <div className=''>
            {phraseBody}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <OptimizeModel
      body={body}
    />
  )
}

export default OptimizeExpModel;
