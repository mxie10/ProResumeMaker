import Phrase from '@/app/component/Phrase';
import Selector from '@/app/component/Selector';
import CustomizedButton from '@/app/component/input/Button';
import useOptReviewWorkExpResModel from '@/app/hooks/useOptReviewWorkExpResModel';
import React from 'react'
import { IoRefreshCircleSharp } from 'react-icons/io5';
import { v4 as uuidv4 } from 'uuid';

interface WorkExpOptSecProps {
    expIndex:number;
}

const WorkExpOptSec:React.FC<WorkExpOptSecProps> = (props) => {

    const {expIndex} = props;
    const optReviewWorkExpResModel = useOptReviewWorkExpResModel();

    const handleStartOpt = () => {
        optReviewWorkExpResModel.onOpen();
        console.log("optReviewWorkExpResModel.isOpen?",optReviewWorkExpResModel.isOpen);
    }

    return (
        <>
            <div className='text-sky-600 font-bold border-b-2 text-lg'>
                Work Experience {expIndex + 1}
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
                shadow-md
              '
            >
                {/* {item.generatedPhrase.map((phrase: string, phraseIndex:number) => {
                return <Phrase content={phrase} key={uuidv4()} />
              })} */}
                <Phrase key={uuidv4()} />
                <Phrase key={uuidv4()} />
                <Phrase key={uuidv4()} />
                <Phrase key={uuidv4()} />
                <Phrase key={uuidv4()} />
            </div>
            <div className='absolute right-1 flex flex-row items-center mt-2 text-sky-600'>
                <span className='text-neutral-500 font-bold'>
                    Don't satisfy with it?
                </span>
                <IoRefreshCircleSharp size={21} className='cursor-pointer' />
            </div>
            <div className='font-bold mt-5'>
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
                    borderColor='border-neutral-400'
                    color='text-black'
                    fontSize='text-md'
                    onClick={handleStartOpt}
                />
            </div>
        </>
    )
}

export default WorkExpOptSec;
