import React from 'react'
import StepContainer from './stepContainer';
import CustomizedTextArea from '@/app/component/input/TextArea';
import useOptmizeProSummaryModel from '@/app/hooks/useOptmizeProSummaryModel';

const step3 = () => {
    const optimizeEXProSummaryModel = useOptmizeProSummaryModel();

    const openOptimizeProExpModel = () => {
        
        optimizeEXProSummaryModel.onOpen();
        // console.log("optimizeEXProSummaryModel.onOpen:",optimizeEXProSummaryModel.isOpenProSummaryModel);
    }

    const linkToAIOptimization = (
        <div 
            className='text-blue-500 cursor-pointer font-bold' 
            onClick={openOptimizeProExpModel}
        >
            AI Optimization
        </div>
    )

    const options = {
        minHeight: "200px",
        placeholder: 'We highly recommend leveraging AI to enhance your professional experience summary, encompassing the correction of grammar errors, optimization of work history, and improvement of overall readability.'
    };

    return (
        <StepContainer>
            <div className='px-1 mt-2'>
                <CustomizedTextArea
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
