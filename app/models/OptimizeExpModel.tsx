import React from 'react'
import OptimizeModel from './OptimizeModel';
import { useGlobalContext } from '../context/useContext';
import CustomizedDropDown from '../component/input/DropDown';
import Phrase from '../component/Phrase';
import Selector from '../component/Selector';
import CustomizedButton from '../component/input/Button';

const OptimizeExpModel = () => {

  const { watch, setValue } = useGlobalContext();
  const workExperience = watch('workExperience');

  const phraseBody = (
    <>

      <div>
        {workExperience.map((item: Object, index: number) => {
          return (
            <div className={`${index === 0 ? 'mt-2' : 'mt-4'}`}>
              <div className='text-sky-600 font-bold border-b-2 text-lg'>
                Work Experience {index + 1}
              </div>
              <div className='text-md font-bold mt-1'>
                Add Pre-Generated Phrase<span className=' text-neutral-500'>(Optional)</span>
              </div>
              <div className='text-sm text-neutral-500'>
                Utilizes AI to craft brief, impactful phrases summarizing your work experiences. Effortlessly communicate your career highlights and expertise with tailored precision.
              </div>
              <div
                className='
                h-300 
                overflow-auto 
                w-full 
                rounded-lg
                p-2
                bg-neutral-100
                mt-1
              '
              >
                <div className='mt-1'><Phrase /></div>
                <div className='mt-1'><Phrase /></div>
                <div className='mt-1'><Phrase /></div>
                <div className='mt-1'><Phrase /></div>
                <div className='mt-1'><Phrase /></div>
              </div>
              <div className='font-bold mt-3'>
                Deep Customize Your Preference <span className=' text-neutral-500'>(Recommand)</span>
              </div>
              <div className='text-sm text-neutral-500'>
                Utilizes AI to craft brief, impactful phrases summarizing your work experiences. Effortlessly communicate your career highlights and expertise with tailored precision.
              </div>
              <div className='mt-1'>
                <Selector />
              </div>
              <div className='mt-2'>
                <CustomizedButton 
                  name='Start Optimizing' 
                  bgColor='bg-white'
                  border='border-2'
                  rounded='rounded-lg'
                  borderColor='border-cyan-900'
                  color='text-skyblue-600'
                />
              </div>
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
          style={{ height: '4%' }}
        >
          Optimize Work Experience
        </div>
        <div className='px-4 py-2 overflow-auto' style={{ height: '90%' }}>
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
