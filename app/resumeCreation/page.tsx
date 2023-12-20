'use client';
import React, { useEffect, useRef } from 'react';
import { Margin, Options, usePDF } from 'react-to-pdf';
import Template2 from '../template/template2';
import dynamic from 'next/dynamic';
import { FaRegCheckCircle } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
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
    <div className='h-full flex flex-row justify-between'>
      {/* left side */}
      <div className='w-full lg:w-1/2 px-1 md:px-10'>
        <StepperComponent />
        <div className='w-full px-10 -mt-3 bg-white shadow-md ring-2 rounded-md'>
          <div className='h-auto flex flex-row justify-between items-center border-b-2 p-1'>
            <Button 
              name='<--Back' 
              width='w-28' 
              height='h-8' 
              bgColor='bg-white' 
              color='text-blue-500' 
              borderColor='border-cyan-900' 
              border='border-2' 
            />
            <div>Summary</div>
            <Button 
              name='Next-->' 
              width='w-28' 
              height='h-8' 
              bgColor='bg-white' 
              color='text-blue-500' 
              borderColor='border-cyan-900' 
              border='border-2' 
            />
          </div>
          <div className='h-535 overflow-auto bg-white box-border'>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
          </div>
        </div>
      </div>

      {/* right side */}
      <div 
        className='hidden h-full lg:w-1/2 bg-white lg:flex lg:flex-row'>
          <div className='w-4/5'>
          <div className='flex flex-row justify-between'>
            <div className='mt-1'>
              <Button 
                border='border-2' 
                rounded='rounded-lg' 
                borderColor='border-cyan-900' 
                width='w-40' 
                bgColor='bg-white'  
                color='text-green-950' 
                name='Export to PDF' 
                fontSize='text-md'
                onClick={handleExportClick}
                icon={FaExternalLinkAlt}
              />
            </div>
            <div 
              className='
                text-neutral-400 
                flex 
                flex-row 
                items-center 
                gap-1 
                mt-1'
              >
              <FaRegCheckCircle/>
              <div>Saved</div>
            </div>
          </div>
            <div className='h-650 overflow-auto border-2 rounded-md bg-slate-100'>
                <div ref={targetRef}>
                  <Template2/>
                </div>
            </div>
          </div>
          <div className='flex flex-col w-1/4 px-2 gap-1'>
            <div className='h-650 bg-slate-100 rounded-lg overflow-auto p-2'>
              <TemplateList/>
            </div>
            <div className='mt-1'>
              <Button 
                border='border-2' 
                name='View All Templates' 
                bgColor='bg-white' 
                rounded='rounded-lg' 
                color='text-green-950'
                borderColor='border-cyan-900' 
              />
            </div>
          </div>
      </div>
    </div>
  )

  return (
    <div className='w-full h-full'>
      {isLoading ? <p>Loading....</p> : bodyConent}
      <div className="relative mt-10">
        <hr className="w-full bg-neutral-400" />
        <div className="flex justify-center mt-1 text-neutral-400">
          This is a placeholder which used to show some info such as copyright
        </div>
      </div>
    </div>
  )
}

export default Page;