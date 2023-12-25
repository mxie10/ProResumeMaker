import CustomizedButton from '@/app/component/input/Button';
import CustomizedInput from '@/app/component/input/Input';
import { useGlobalContext } from '@/app/context/useContext';
import { FaTrash } from "react-icons/fa";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import React from 'react';
import StepContainer from './stepContainer';
import CustomizedTextArea from '@/app/component/input/TextArea';

type itemType = Object | undefined;

const workExperienceInfo = [
  { title: 'Company' },
  { title: 'Job title' },
  { title: 'Start Date',type:'date' },
  { title: 'End Date' ,type:'date'},
]

const Step3 = () => {
  const { watch,setValue } = useGlobalContext();
  const workExperience = watch('workExperience');

  const addNew = () => {
    const newWorkExp = [...workExperience, { company:'',jobTitle:'',startDate:'',endDate:'',description:'' }];
    setValue('workExperience', newWorkExp);
  }

  const deleteSection = (indexToRemove:number) => {
    const updatedWorkExp = workExperience.filter((item:itemType, index:number) => index !== indexToRemove);
    setValue('workExperience',updatedWorkExp);
  }

  const options = {
    minHeight: "160px", 
    placeholder:'We highly recommend leveraging AI to enhance your professional experience summary, encompassing the correction of grammar errors, optimization of work history, and improvement of overall readability.'
  };

  const linkToAIOptimization = (
    <div className='text-blue-500 cursor-pointer font-bold'>AI Optimization</div>
  )

  return (
    <StepContainer>
        {workExperience.map((item: itemType, index: number) => (
          <div className='mt-2 px-1'>
            <div className='flex flex-row justify-between'>
              <div className='text-md font-bold'>Experience {index+1}</div>
              <FaTrash size={18} onClick={()=>deleteSection(index)} className=' cursor-pointer hover:text-red-600'/>
            </div>
            <div className='flex flex-row justify-between flex-wrap'>
              {workExperienceInfo.map((item,index)=>(
                  <CustomizedInput 
                      key={index} 
                      label={item.title} 
                      textColor='text-neutral-500' 
                      textSize='text-md' 
                      bgColor='bg-neutral-100' 
                      inputType={item.type}
                  />
              ))}
            </div>
            <div className='mt-3'>
                <CustomizedTextArea
                    label='Responsibility'
                    width='w-full'
                    textColor='text-neutral-500'
                    textSize='text-md'
                    addtionalText='Get stucked? Try  '
                    link={linkToAIOptimization}
                    options={options}
                />
            </div>
          </div>
        ))}
        <div className='mt-3'>
            <CustomizedButton 
              name='Add New' 
              bgColor='bg-white' 
              color='text-black' 
              border='border-2'
              rounded='rounded-lg'
              borderColor='border-neutral-300'
              onClick={addNew}
          />
        </div>
    </StepContainer>
  )
}

export default Step3;
