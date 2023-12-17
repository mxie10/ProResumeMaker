import React from 'react'
import { IconType } from 'react-icons';

interface EditingOptionProps {
    icon: IconType;
    description: string;
}

const EditingOption: React.FC<EditingOptionProps> = (props) => {

    const {icon:Icon,description} = props;
    return (
        <div
            className='
                flex
                flex-col
                justify-center
                items-center
                cursor-pointer
                hover:bg-neutral-200
                p-1
                rounded-lg
            '
        >
            <Icon className='w-8 h-8'/>
            <div className='text-xs font-medium'>{description}</div>
        </div>
    )
}

export default EditingOption;
