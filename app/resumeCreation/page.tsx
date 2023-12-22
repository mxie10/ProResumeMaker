'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Margin, Options, usePDF } from 'react-to-pdf';
import Template2 from '../template/template2';
import dynamic from 'next/dynamic';
import { FaRegCheckCircle } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Button from '../component/input/Button';
import TemplateList from './TemplateList';
import Step1 from './steps/step1';
import CustomizedStepper from './customStepper';
import Step2 from './steps/step2';
import { useGlobalContext } from '../context/useContext';

enum STEP {
  Summary = 0,
  Education = 1,
  WorkExperience = 2,
  ProjectExperience = 3,
  Skills = 4
}

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { resuCreateStep, setResuCreateStep } = useGlobalContext();
  const { toPDF, targetRef } = usePDF({ filename: 'test.pdf' });

  const header = ['Personal Details','Education Info','Work Experience','Project Experience','Skills'];

  const options: Options = {
    page: {
      // margin is in MM, default is Margin.NONE = 0
      margin: Margin.SMALL,
      // default is 'A4'
      format: 'letter',
      // default is 'portrait'
      orientation: 'portrait',
    },
  };

  useEffect(() => {
    setIsLoading(false);
  }, [isLoading])


  const handleExportClick = () => {
    toPDF(options);
  };

  const onNext = () => {
    setResuCreateStep((step)=>step+1);
  }

  const onBack = () => {
    setResuCreateStep((step)=>step-1);
  }

  let stepBody = (
    <Step1/>
  )

  if(resuCreateStep === STEP.Education){
    stepBody = (
      <Step2/>
    )
  }

  const bodyConent = (
    <div className='flex flex-row justify-between'>
      {/* left side */}
      <div className='w-full lg:w-1/2 bg-white px-1 py-2 md:px-10'>
        <div className='mt-2'>
          <CustomizedStepper />
        </div>
        <div className='w-ful h-600  px-10 mt-2 bg-white shadow-lg rounded-md border-2'>
          <div className='h-auto flex flex-row justify-between items-center py-2 relative mt-6'>
            {resuCreateStep!==0? 
              <div className='absolute left-1'>
                <Button
                  name='<--Back'
                  width='w-28'
                  height='h-8'
                  bgColor='bg-white'
                  color='text-blue-500'
                  borderColor='border-slate-300'
                  onClick={onBack}
              /></div>:null
            }
            <div className='hidden lg:block font-bold text-lg absolute' style={{left:'38%'}}>{header[resuCreateStep]}</div>
            <div className='absolute right-1'>
              <Button
                name='Next-->'
                width='w-28'
                height='h-8'
                bgColor='bg-white'
                color='text-blue-500'
                borderColor='border-slate-300'
                onClick={onNext}
              />
            </div>
          </div>
          <div className='mt-5'>
            {stepBody}
          </div>
        </div>
      </div>

      {/* right side */}
      <div className='hidden lg:w-1/2 bg-white lg:flex lg:flex-row pr-6'>
        <div className='w-4/5'>
          <div className='h-670 overflow-auto border-2 rounded-md mt-2 p-2'>
            <Template2 />
          </div>
          <div className='flex flex-row justify-between'>
            <div
              className='
                text-neutral-400 
                flex 
                flex-row 
                items-center 
                gap-1 
                mt-1'
            >
              <FaRegCheckCircle />
              <div>Saved</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-1/4 px-2 gap-'>
          <div className='mt-2'>
            <Button
              border='border-2'
              rounded='rounded-lg'
              borderColor='border-cyan-900'
              width='w-40'
              height='h-9'
              bgColor='bg-white'
              color='text-green-950'
              name='Export to PDF'
              fontSize='text-md'
              onClick={handleExportClick}
              icon={FaExternalLinkAlt}
            />
          </div>
          <div className='h-600 bg-gray-100 rounded-lg overflow-auto p-2'>
            <TemplateList />
          </div>
          <div className='mt-5'>
            <Button
              name='View All Templates'
            />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className='w-full h-full'>
      {isLoading ? <p>Loading....</p> : bodyConent}
    </div>
  )
}

export default Page;