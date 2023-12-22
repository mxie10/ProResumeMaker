import CustomizedButton from '@/app/component/input/Button';
import CustomizedInput from '@/app/component/input/Input';
import { useGlobalContext } from '@/app/context/useContext';
import { FaTrash } from "react-icons/fa";
import React from 'react'

type itemType = Object | undefined;

const educationInfo = [
  { title: 'School Name' },
  { title: 'Degree' },
  { title: 'Start Date',type:'date' },
  { title: 'End Date' ,type:'date'},
  { title: 'GPA' },
]

const Step2 = () => {
  const { watch,setValue } = useGlobalContext();
  const education = watch('Education');

  const addNew = () => {
    const newEducation = [...education, { school: '', startDate: '', endDate: '', degree: '' }];
    setValue('Education', newEducation);
  }

  const deleteSection = (indexToRemove:number) => {
    const updatedEducation = education.filter((item:itemType, index:number) => index !== indexToRemove);
    setValue('Education',updatedEducation);
  }

  return (
    <>
      <div className='h-535 overflow-y-scroll no-scrollbar bg-white mt-2 pb-6'>
        {education.map((item: itemType, index: number) => (
          <div className='mt-2'>
            <div className='flex flex-row justify-between'>
              <div className='text-md font-bold'>Education {index+1}</div>
              <FaTrash size={18} onClick={()=>deleteSection(index)} className=' cursor-pointer hover:text-red-600'/>
            </div>
            <div className='flex flex-row justify-between flex-wrap'>
              {educationInfo.map((item,index)=>(
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
      </div>
    </>
  )
}

export default Step2;
