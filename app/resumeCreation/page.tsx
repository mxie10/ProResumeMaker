'use client';
import React, { useEffect, useRef } from 'react';
import { Margin, Options, usePDF } from 'react-to-pdf';
import Template2 from '../template/template2';
import dynamic from 'next/dynamic';
import { FaRegCheckCircle } from "react-icons/fa";
import Button from '../component/input/Button';
import TemplateList from './TemplateList';

const Page = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const { toPDF, targetRef } = usePDF({filename: 'test.pdf'});
  const StepperComponent = dynamic(() => import('./customStepper'), {
    ssr: false,
  });

  const options:Options = {
    page: {
      // margin is in MM, default is Margin.NONE = 0
      margin: Margin.SMALL,
      // default is 'A4'
      format: 'letter',
      // default is 'portrait'
      orientation: 'portrait',
   },
  };

  useEffect(()=>{
    setIsLoading(false);
  },[isLoading])


  const handleExportClick = () => {
    toPDF(options);
  };


  const bodyConent = (
    <div className='flex flex-row justify-between'>
      {/* left side */}
      <div className='w-full lg:w-1/2'>
        <StepperComponent />
      </div>
      {/* right side */}
      <div className='hidden lg:w-1/2 lg:h-full bg-white lg:flex lg:flex-row'>
          <div className='w-4/5'>
            <div className='h-660 overflow-auto border-2'>
                <div ref={targetRef}>
                  <Template2/>
                </div>
            </div>
            <div className='relative text-neutral-400 flex flex-row items-center gap-1 mt-1'>
              <FaRegCheckCircle/>
              <div>Saved</div>
            </div>
          </div>
          <div className='flex flex-col w-1/4 px-2 gap-1'>
              <Button name='Export to PDF' onClick={handleExportClick} bgColor='bg-green-700'/>
            <div className='h-600 bg-neutral-300 rounded-lg overflow-auto p-3'>
              <TemplateList/>
            </div>
            <Button name='View All Templates' bgColor='bg-blue-950'/>
          </div>
      </div>
    </div>
  )

  return (
    <div className='w-full'>
      {isLoading ? <p>Loading....</p> : bodyConent}
    </div>
  )
}

export default Page;