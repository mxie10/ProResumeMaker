// 'use client'

// import { GiVintageRobot } from 'react-icons/gi';
// import { BsPencilSquare } from 'react-icons/bs';
// import { BsFillBoxFill } from 'react-icons/bs';
// import OnBoardingHeader from '../component/header/onboardingHeader';
// import CreateOption from './CreateOption';
// import Button from '../component/input/Button';
// import { useEffect, useRef, useState } from 'react';
// import Input from '../component/input/Input';

// import  { Key } from "react";
// import { SwitchTransition, CSSTransition } from "react-transition-group";

// enum DIRECTION {
//   OnBoarding = -1,
//   AIGenerate = 0,
//   ManuallyGenerate = 1
// }

// const AIPanalFields = ["Resume Name","Industry","Job Title"];

// const Page = () => {

//   const [direction, setDirection] = useState(DIRECTION.OnBoarding);
//   const [selected, setSelected] = useState("");

//   const [mode, setMode] = useState<"out-in" | "in-out" | undefined>("out-in");
//   const [state, setState] = useState<Key | null | undefined>(1);

//   const bodyRef = useRef<HTMLDivElement | null>(null);

//   const onChosen = (category: string) => {
//     setSelected(category);
//   }

//   const onNext = () => {
//     if (selected === 'AI') {
//       setDirection(DIRECTION.AIGenerate);
//     } else {
//       setDirection(DIRECTION.ManuallyGenerate);
//     }
//     setState((state: any) => !state);
//   }

//   const onGoBack = () => {
//     setDirection(DIRECTION.OnBoarding);
//   }

//   let bodyContent = (
   
//     <div 
//       className={`
//           flex 
//           flex-col
//           transition-transform 
//           transform 
//           duration-300
//           ease-in-out
//       `}
//     >
//       <div
//         className={`
//             flex
//             flex-col
//             md:flex-row
//             items-center
//             md:justify-between
//             mt-14
//         `}
//       >
//         <CreateOption
//           icon={GiVintageRobot}
//           description="Generate a example Resume"
//           category="AI"
//           direction={DIRECTION.AIGenerate}
//           selected={selected}
//           onClick={(category) => onChosen(category)}
//         />
//         <CreateOption
//           icon={BsPencilSquare}
//           description="Customize My Resume"
//           category="Manual"
//           direction={DIRECTION.ManuallyGenerate}
//           selected={selected}
//           onClick={(category) => onChosen(category)}
//         />
//       </div>
//       <div
//         className='
//             relative 
//             mt-16
//         '
//       >
//         <div
//           className='
//               float-right
//               md:w-36
//               w-full
//           '
//         >
//           <Button name="Next" onClick={onNext}/>
//         </div>
//       </div>
//     </div>
    
//   )

//   if(direction === DIRECTION.AIGenerate){
//     bodyContent = (
//       <SwitchTransition mode={mode}>
//       <CSSTransition
//         key={state}
//         nodeRef={bodyRef}
//         addEndListener={(done: any) => {
//           bodyRef.current?.addEventListener("transitionend", done, false);
//         }}
//         classNames="fade"
//       >
//       <div
//         className={`
//             mt-14
//             flex
//             flex-row
//             transition-transform 
//             transform 
//             duration-300
//             ease-in-out
//        `}
//       >
//         <div 
//           className='
//             hidden
//             md:w-1/4
//             md:block
//           '
//         >
//           <BsFillBoxFill className=' w-36 h-36'/>
//         </div>
//         <div 
//           className='
//             bg-white 
//             w-full
//             md:w-3/4 
//             border-2 
//             border-neutral-200 
//             p-8 
//             rounded-lg 
//             shadow-md
//         '>
//           <div className='mx-2'>
//             <div className='text-2xl border-b-2 pb-5'>
//               Generate your template resume
//             </div>
//             <div className='text-neutral-500 mt-4 text-lg'>
//               Craft a resume using our template with just a few details. Edit anytime later.
//             </div>
//             <div 
//               className='
//                 flex
//                 flex-row
//                 flex-wrap
//                 gap-2
//                 justify-between
//                 mt-3
//               '
//             >
//               {AIPanalFields.map((item)=>{
//                 return <Input label={item} otherStyle="mt-2" textColor={'text-neutral-600'}/>
//               })}
//             </div>
//             <div className='flex flex-row justify-between mt-6'>
//               <Button name="Go back" width={'w-1/3'} onClick = {onGoBack}/>
//               <Button name="Generate" width={'w-1/3'}/>
//             </div>
//           </div>
//         </div>
//       </div>
//       </CSSTransition>
//       </SwitchTransition>
//     )
//   }


//   return (
//     <div className='h-full w-full bg-neutral-50 md:px-60 md:py-12'>
//       <OnBoardingHeader />
//       {/* {bodyContent} */}
//       {state ? "Goodbye, world!" : "Hello, world!"}
//     </div>
//   )
// }

// export default Page;
