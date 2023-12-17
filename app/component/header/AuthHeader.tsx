import React from 'react';

interface AuthHeaderProps {
    title?:string;
    header?: string;
    subHeader?: string;
}

const AuthHeader:React.FC<AuthHeaderProps> = (props) => {

    const {title,header,subHeader} = props;
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className="text-xl font-medium">ProResuMaker</h2>
            <h2 className="text-xl font-bold mt-7">Join our community</h2>
            <h3 className="text-sm text-neutral-500 mt-2 font-medium">Start your journy with our product</h3>
        </div>
    )
}

export default AuthHeader;
