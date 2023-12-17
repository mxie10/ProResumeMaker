import React from 'react'

interface TypeLabelProps {
    name: string;
}

const ResumeTypeLabel:React.FC<TypeLabelProps> = (props) => {

    const {name} = props;
    return (
        <div 
            className='
                rounded-md
                bg-neutral-200 
                px-2
                py-1 
                items-center 
                justify-center
                inline-block
                text-xs
                font-bold
            '
        >
            {name}
        </div>
    )
}

export default ResumeTypeLabel;
