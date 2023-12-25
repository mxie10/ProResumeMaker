import React from 'react'
import StepContainer from './stepContainer';
import CustomizedTextArea from '@/app/component/input/TextArea';

const step3 = () => {
    
    const linkToAIOptimization = (
        <div className='text-blue-500 cursor-pointer font-bold'>AI Optimization</div>
    )

    const options = {
        minHeight: "160px",
        placeholder: 'We highly recommend leveraging AI to enhance your professional experience summary, encompassing the correction of grammar errors, optimization of work history, and improvement of overall readability.'
    };

    return (
        <StepContainer>
            <div className='px-1'>
                <CustomizedTextArea
                    label='Professional Summary'
                    width='w-full'
                    textColor='text-neutral-500'
                    textSize='text-md'
                    addtionalText='Get stucked? Try  '
                    link={linkToAIOptimization}
                    options={options}
                />
            </div>
        </StepContainer>
    )
}

export default step3;
