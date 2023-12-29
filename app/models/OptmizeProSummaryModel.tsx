import React from 'react'
import { IoMdCloseCircle } from 'react-icons/io';
import useOptmizeProSummaryModel from '../hooks/useOptmizeProSummaryModel';
import OptimizeModel from './OptimizeModel';
import Selector from '../component/Selector';
import CustomizedButton from '../component/input/Button';
import { IoRefreshCircleSharp } from 'react-icons/io5';

const OptmizeProSummaryModel = () => {

    const optimizeProSummaryModel = useOptmizeProSummaryModel();

    const onClose = () => {
        optimizeProSummaryModel.onClose();
    }

    const bodyContent = (
        <div className='flex flex-col px-4 py-2'>
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
                    Optimize Professional Summary
                </div>
                <div className='mt-1'>
                    <div className='text-md font-bold text-sky-600'>
                        Tell us how do you want to optimize your professional summar
                    </div>
                    <div className='text-sm text-neutral-400'>
                        We provide some necessary options, and you can also customize according to your own needs.
                    </div>
                    <div className='mt-1'>
                        <Selector />
                    </div>
                </div>
                <div className=''>
                    <div className='text-md text-sky-600 font-bold mt-1 flex flex-row justify-between items-center'>
                        <div>Optimized Result</div>
                        <div className='flex flex-row items-center'>
                            <span className='text-neutral-500'>Don't satisfy with it?</span>
                            <IoRefreshCircleSharp size={21} className='cursor-pointer' />
                        </div>
                    </div>
                    <div className='w-full h-300 overflow-auto bg-neutral-100 rounded-lg mt-1 p-2'>
                        - Collaborated with cross-functional teams to design and implement scalable and efficient software solutions.
                        <br />
                        - Developed and maintained front-end and back-end components of web applications, ensuring high performance and responsiveness.
                        <br />
                        - Participated in code reviews to ensure code quality, adherence to coding standards, and knowledge sharing among team members.
                        <br />
                        - Implemented software solutions using languages such as JavaScript, Python, and Java.
                        <br />
                        - Led the integration of third-party APIs to enhance the functionality of our applications.
                        - Participated in code reviews to ensure code quality, adherence to coding standards, and knowledge sharing among team members.
                        <br />
                        - Implemented software solutions using languages such as JavaScript, Python, and Java.
                        <br />
                        - Led the integration of third-party APIs to enhance the functionality of our applications.
                    </div>
                </div>
                <div className='mt-1'>
                    <CustomizedButton
                        name='Start Optimizing'
                        bgColor='bg-white'
                        border='border-2'
                        rounded='rounded-lg'
                        borderColor='border-neutral-400'
                        color='text-black'
                        fontSize='text-md'
                    />
                </div>
            </div>
        </div>
    )

    return (
        <OptimizeModel
            body={bodyContent}
            isOpen={optimizeProSummaryModel.isOpen}
            onClose={onClose}
        />
    )
}

export default OptmizeProSummaryModel;
