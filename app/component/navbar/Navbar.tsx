'use client';

import { useRouter } from "next/navigation";
import navBarHeader from '../../static/navbar';
import Avatar from '../Avatar';

const Navbar = () => {

    const router = useRouter();
    return (
        <div
            className='
                w-full
                flex
                flex-row
                justify-between
                p-3
                border-b-2
                border-gray-00
            bg-neutral-100
            '
        >
            <div className='flex flex-row items-center justify-center'>
                <div className='text-2xl font-medium cursor-pointer' onClick={()=>router.push('/')}>ProResuMaker</div>
                <div className='flex flex-row ml-7 mt-1 text-neutral-600'>
                    {navBarHeader.map((item,index)=>{
                        return (
                            <div key={index} className='ml-3 cursor-pointer' onClick={()=>router.push(item.navTo)}>{item.name}</div>
                        )
                    })}
                </div>
            </div>
            <Avatar/>
        </div>
    )
}

export default Navbar;
