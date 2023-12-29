import React from 'react'
import useOptReviewWorkExpResModel from '../hooks/useOptReviewWorkExpResModel';
import { IoMdCloseCircle } from 'react-icons/io';
import CustomizedTextArea from '../component/input/TextArea';
import { IoRefreshCircleSharp } from 'react-icons/io5';
import Selector from '../component/Selector';
import CustomizedButton from '../component/input/Button';

const ReviewWorkExpOptResModel = () => {
    const optReviewWorkExpResModel = useOptReviewWorkExpResModel();
    const modalClasses = optReviewWorkExpResModel.isOpen ? '-translate-y-full'  : 'translate-y-0';

    const onClose = () => {
        optReviewWorkExpResModel.onClose();
    }

    return (
        <>
           <div className={optReviewWorkExpResModel.isOpen ? 'fixed h-screen w-1/2 right-0 bg-gray-800 bg-opacity-75 z-20' : ''}>
                <div
                    className={`
                    fixed
                    h-3/4
                    w-1/2 
                    z-30
                    border-2 
                    shadow-md 
                    bg-white
                    transform
                    transition-transform
                    duration-300
                    right-0
                    -bottom-3/4
                    ease-in-out
                    p-2
                    overflow-auto
                    ${modalClasses}
                    
                `}
                >
                     <div className='mt-2 ml-2 cursor-pointer w-full'>
                        <IoMdCloseCircle size={20} onClick={onClose} />
                    </div>
                    <div className='flex items-center justify-center text-xl font-bold border-b-2'>
                        Your career insights has been optimized!
                    </div>
                    <div className='text-md text-sky-600 font-bold mt-1 flex flex-row justify-between items-center'>
                        <div>Optimized Result</div>
                        <div className='flex flex-row items-center'>
                            <span className='text-neutral-500'>Don't satisfy with it?</span>
                            <IoRefreshCircleSharp size={21} className='cursor-pointer' />
                        </div>
                    </div>
                    <div className='w-full h-300 overflow-auto bg-neutral-100 rounded-lg mt-1 p-2'>
                        - Collaborated with cross-functional teams to design and implement scalable and efficient software solutions.
                        <br/>
                        - Developed and maintained front-end and back-end components of web applications, ensuring high performance and responsiveness.
                        <br/>
                        - Participated in code reviews to ensure code quality, adherence to coding standards, and knowledge sharing among team members.
                        <br/>
                        - Implemented software solutions using languages such as JavaScript, Python, and Java.
                        <br/>
                        - Led the integration of third-party APIs to enhance the functionality of our applications.
                        - Participated in code reviews to ensure code quality, adherence to coding standards, and knowledge sharing among team members.
                        <br/>
                        - Implemented software solutions using languages such as JavaScript, Python, and Java.
                        <br/>
                        - Led the integration of third-party APIs to enhance the functionality of our applications.
                    </div>
                    <div className='mt-4 font-bold text-md text-sky-600'>
                        Want to add more options?
                    </div>
                    <div className='mt-1'>
                        <Selector />
                    </div>
                    <div className='mt-2'>
                    <CustomizedButton
                        name='Continue Optimizing'
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
        </>
    )
}

export default ReviewWorkExpOptResModel;
