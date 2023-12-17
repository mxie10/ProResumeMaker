import React, { Dispatch, SetStateAction, useRef } from 'react';

interface Template1Props {
    tempbgcolor?:string,
    zoom:number,
    data?: any
}

const Template1: React.FC<Template1Props> = ({
    tempbgcolor,
    zoom,
    data,
}) => {

    const experienceRef = useRef<HTMLDivElement>(null);

    //transform scale-2
    return (
        <div
            className='
                    flex
                    shadow-md
                    w-800
                    min-h-[1000px]
                    border-solid
                    border-2
                '
            style={{ zoom: zoom }}
        >
            <div className='flex flex-row w-full h-full box-border'>
                <div className={`w-1/3 ${tempbgcolor?tempbgcolor:'bg-teal-800'}`}>
                    <div className='mt-5 ml-2 px-2'>
                        {/* candidate name */}
                        <div className='text-3xl flex flex-col text-white'>
                            <div className='font-bold'>Contact</div>
                        </div>
                        {/* job title and contact info */}
                        <div className='text-white text-lg'>
                            <div className='mt-2'>xieyz12@gmail.com</div>
                            <div>(283)7773625</div>
                        </div>
                         {/* Education */}
                         <div className='text-white mt-9'>
                            <div className='text-3xl'>Education</div>
                            <div className='text-xl font-bold'>Centenial College</div>
                            <div className='text-lg'>
                                <div>September 2022 to May 2023</div>
                                <div>Graduate Certificate</div>
                            </div>
                        </div>
                        {/* skills */}
                        <div className='text-white mt-9'>
                            <div className='text-3xl'>Skills</div>
                            <div className='text-lg'>
                                <div>React</div>
                                <div>Javascript</div>
                                <div>Typescript</div>
                                <div>Html</div>
                                <div>Css</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-2/3 bg-white'>
                    <div className='mt-5 px-4'>
                        {/* candidate name and job title*/}
                        <div className='flex flex-col items-center justify-center text-4xl font-bold text-blue-950'>
                            <div >Kevin Xie</div>
                            <div className='text-3xl'>Software Engineer</div>
                        </div>
                        <hr className=' bg-slate-300 h-1 mt-2'/>
                        {/* experience overview */}
                        <div className='mt-2 box-border p-2'>
                            <div className='text-2xl font-bold text-blue-950'>Experience Overview</div>
                            <div className='' style={{ maxWidth: '95%' }} ref={experienceRef}>
                                {/* {description} */}
                                With several years of experience as a software engineer, I specialize in crafting efficient and scalable software solutions. Proficient in various programming languages and technology stacks, my expertise spans front-end and back-end development, databases, version control, and cloud platforms.
In my career, I've been involved in diverse projects, managing the entire development lifecycle from requirements analysis to system deployment. Adaptable to agile methodologies, I quickly embrace new technologies and tools. Prioritizing teamwork。
                            </div>
                        </div>
                        {/* professional experience */}
                        <div className='mt-1 box-border p-2'>
                            <div className='text-2xl font-bold text-blue-950'>Professional Experience</div>
                            <div className='flex flex-col'>
                                <div>Sogotrade | Nov 2019 - present</div>
                                <div className='font-bold'>Project Name 1</div>
                                <ol>
                                    <li>• Extensively understanding in creating and managing Components, Screens, CSS with using React.</li>
                                    <li>• Worked extensively in managing database with using MongoDB, SQL Server and Firebase.</li>
                                    <li>• Proficient in working with teams, working as a pair, providing efficient and professional solutions.</li>
                                </ol>
                            </div>
                            <div className='flex flex-col'>
                                <div>Sogotrade | Nov 2019 - present</div>
                                <div className='font-bold'>Project Name 2</div>
                                <ol>
                                    <li>• Extensively understanding in creating and managing Components, Screens, CSS with using React.</li>
                                    <li>• Worked extensively in managing database with using MongoDB, SQL Server and Firebase.</li>
                                    <li>• Proficient in working with teams, working as a pair, providing efficient and professional solutions.</li>
                                </ol>
                            </div>
                            <div className='flex flex-col'>
                                <div>Sogotrade | Nov 2019 - present</div>
                                <div className='font-bold'>Project Name 3</div>
                                <ol>
                                    <li>• Extensively understanding in creating and managing Components, Screens, CSS with using React.</li>
                                    <li>• Worked extensively in managing database with using MongoDB, SQL Server and Firebase.</li>
                                    <li>• Proficient in working with teams, working as a pair, providing efficient and professional solutions.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Template1;
