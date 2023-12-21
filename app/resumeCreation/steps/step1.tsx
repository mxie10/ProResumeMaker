import React, { useState } from 'react'
import Button from '@/app/component/input/Button';
import CustomizedInput from '@/app/component/input/Input';
import CustomizedTextArea from '@/app/component/input/TextArea';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const primaryInfo = [
    { title: 'First Name' },
    { title: 'Middle Name' },
    { title: 'Last Name' },
    { title: 'Email' },
    { title: 'Phone' },
]

const additionalInfo = [
    { title: 'City' },
    { title: 'State' },
    { title: 'Province' },
    { title: 'Country' },
    { title: 'Zip Code' },
    { title: 'Date of Birth' },
    { title: 'Age' },
]

const Step1 = () => {
    const linkToAIOptimization = (
        <div className='text-blue-500 cursor-pointer'>AI Optimization</div>
    )

    return (
        <>
            <div className='h-535 overflow-y-scroll no-scrollbar bg-white px-1 mt-2 pb-6'>
                <div className='flex flex-row flex-wrap justify-between'>
                    {primaryInfo.map((item, index) => (
                        <CustomizedInput key={index} label={item.title} width='w-64' textColor='text-neutral-500' textSize='text-md' bgColor='bg-neutral-100' />
                    ))}
                </div>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='text-blue-500 text-md'>Additional Info</AccordionTrigger>
                        <AccordionContent>
                            <div className='flex flex-row flex-wrap justify-between'>
                                {additionalInfo.map((item, index) => (
                                    <CustomizedInput
                                        key={index}
                                        label={item.title}
                                        width='w-64'
                                        textColor='text-neutral-500'
                                        textSize='text-md'
                                        bgColor='bg-neutral-100'

                                    />
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <CustomizedTextArea 
                    label='Summary' 
                    width='w-full' 
                    height='h-44' 
                    textColor='text-neutral-500' 
                    textSize='text-md' 
                    bgColor='bg-neutral-100' 
                    addtionalText='Get stucked? Try  '
                    link={linkToAIOptimization}
                />
            </div>
        </>
    )
}

export default Step1;
