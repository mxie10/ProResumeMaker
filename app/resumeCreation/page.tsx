'use client';
import React, { useEffect } from 'react';
import Template2 from '../template/template2';
import dynamic from 'next/dynamic';

const Page = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const StepperComponent = dynamic(() => import('./customStepper'), {
    ssr: false,
  });

  useEffect(()=>{
    setIsLoading(false);
  },[isLoading])

  const bodyConent = (
    <div className='flex flex-row justify-between'>
      {/* left side */}
      <div className='w-1/2 border-red-100 h-5/6'>
        <StepperComponent />
      </div>
      {/* right side */}
      <div className='overflow-auto hidden lg:block lg:w-1/2 lg:h-650 bg-white p-1'>
        <div className='ml-5 mt-2 mb-6 lg:h-650'>
          <Template2/>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      {isLoading ? <p>Loading....</p> : bodyConent}
    </div>
  )
}

export default Page;