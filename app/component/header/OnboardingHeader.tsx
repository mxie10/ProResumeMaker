'use client'

import React, { useEffect, useState } from 'react';
import { BsColumnsGap } from 'react-icons/bs';

const OnBoardingHeader = () => {

    // const [isHeaderAnimated, setHeaderAnimated] = useState(false);
    // const [isHeaderVisible, setHeaderVisible] = useState(false);

    // useEffect(() => {
    //     setHeaderVisible(true);
    //     setHeaderAnimated(true)
    // }, [setHeaderVisible,setHeaderAnimated]);
    
    // ${isHeaderAnimated?'translate-x-0':'translate-x-1/4'}
    // ${isHeaderVisible?'opacity-100':''}
    // transition-transform 
    // transform 
    // opacity-0
    // duration-200
    // ease-in-out
    
    return (
        <div
            className={`
                flex
                flex-row
                justify-between
                items-center
                bg-neutral-50
            `}
        >
            <div
                className='
                    flex
                    flex-col
                '
            >
                <div
                    className='
                        text-2xl
                        font-bold
                    '
                >
                    Craft Your AI-Powered Resume
                </div>
                <div
                    className='
                        text-sm
                        font-medium
                        text-neutral-500
                    '
                >
                    Launch a new journey by importing your details, or let our templates guide your story.
                </div>
            </div>
            <div>
                <BsColumnsGap 
                    className='
                         w-20
                        h-20
                    '
                />
            </div>
        </div>
    )
}

export default OnBoardingHeader;
