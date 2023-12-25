import React, { useState } from 'react'
import CustomizedInput from '@/app/component/input/Input';
import CustomizedTextArea from '@/app/component/input/TextArea';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import StepContainer from './stepContainer';

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
    { title: 'Date of Birth', type: 'date' },
    { title: 'Age' },
]

const Step1 = () => {
    return (
        <StepContainer>
            <div className='flex flex-row flex-wrap justify-between px-1'>
                {primaryInfo.map((item, index) => (
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
            <div className='text-blue-500 mt-3 border-b-2 text-md'>Additional Info</div>
            <div className='flex flex-row flex-wrap justify-between px-1'>
                {additionalInfo.map((item, index) => (
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
            {/* <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className='text-blue-500 text-md'>Additional Info</AccordionTrigger>
                    <AccordionContent>
                       
                    </AccordionContent>
                </AccordionItem>
            </Accordion> */}
        </StepContainer>
    )
}

export default Step1;
