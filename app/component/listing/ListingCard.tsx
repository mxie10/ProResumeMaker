import React from 'react';
import { Card } from "@/components/ui/card";
import Image from 'next/image';
import { AiFillEdit } from 'react-icons/ai';
import { AiOutlineDownload } from 'react-icons/ai';
import { BsTvFill } from 'react-icons/bs';
import { BsClockHistory } from 'react-icons/bs';
import ResumeTypeLabel from '../ResumeTypeLabel';
import EditingOption from './EditingOption';
import Template1 from '@/app/template/template1';

interface ListingCardProps {
    bgColor?:string;
 }

const ListingCard: React.FC<ListingCardProps> = (props) => {

   const {bgColor} = props;
    
    return (
        <Card
            className={`
            flex
            flex-row
            px-5
            pt-6
            pb-7
            border-neutral-300
            lg:w-30
            w-full
            gap-7
            shadow-md
        `}
        >
            <div className='w-1/3 '>
                <Image className='' height='40' width='200' alt="Avater" src={"/images/resumeSample.jpg"} />
                {/* <Template1 zoom={0.15}/> */}
            </div>
            <div 
                className='
                    w-2/3 
                    flex 
                    flex-col 
                    justify-between
                '
            >
                {/* header */}
                <div className='flex flex-col'>
                    <div className='flex flex-row justify-between'>
                        <div className='font-bold text-lg text-blue-900'>My resume</div>
                        <div 
                            className='
                                rounded-full 
                                bg-neutral-200
                                hover:border-blue-300
                                cursor-pointer
                                border-transparent
                                border-2
                            '
                        >
                            <BsTvFill 
                                className='
                                    w-8 
                                    h-8 
                                    p-2
                                ' 
                            />
                        </div>
                    </div>
                     {/* label */}
                    <div>
                        <ResumeTypeLabel name="IT" />
                    </div>
                </div>
               
                {/* Editing button and timp stamp*/}
                <div className='flex flex-col'>
                    <div className='
                        flex
                        flex-row
                        mt-10
                        gap-2
                    '>
                        {/* bgColor='bg-emerald-700' bgColor='bg-orange-700' */}
                        <EditingOption icon={AiFillEdit} description="Edit" /> 
                        <EditingOption icon={AiOutlineDownload} description="Download" />
                    </div>
                    <div className='
                        relative
                    '>
                        <div 
                            className='
                                flex 
                                flex-row 
                                items-center 
                                justify-center 
                                absolute 
                                right-0
                                 
                            '
                        >
                            <BsClockHistory 
                                className='
                                    w-4 
                                    h-4 
                                    text-neutral-500' 
                            />
                            <div 
                                className='
                                    text-xs 
                                    text-neutral-500
                                    ml-2
                                '
                            >
                                    3 days ago
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default ListingCard;
