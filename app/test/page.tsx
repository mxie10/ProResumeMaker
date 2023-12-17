'use client';

import React, { Key, useEffect, useRef, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Button, Form } from "react-bootstrap";

const modes = ["out-in", "in-out"];

export default function App() {

// const userData = {
//   job: [
//     {
//       index:0,
//       title:"Software Developer",
//       company:"company1",
//       time:"2023/8/13",
//       description: "Steam versions are being updated (for free) to include the new features,Raytracing support, 4K support (presumably not for Series S), high framerate support, and 3D audio support,Xbox One owners get access"
//     },
//   ],
//   education: [
//     {
//       school: "Syracuse University",
//       degree: "Master",
//       time:"May 7th 2019",
//       city:"Syracuse"
//     }
//   ]
// }


  const [mode, setMode] = React.useState<"out-in" | "in-out" | undefined>("out-in");
  const [state, setState] = React.useState<Key | null | undefined>(1);
  const helloRef = React.useRef<HTMLDivElement | null>(null);
  const goodbyeRef = React.useRef<HTMLDivElement | null>(null);
  const nodeRef = state ? helloRef : goodbyeRef;

  const outerDivRef = useRef<any>();
  const contentRef = useRef<any>(null);
  const [isContentOverflowing, setIsContentOverflowing] = useState(false);

  useEffect(() => {
    const outerDivHeight = outerDivRef.current.offsetHeight;
    const contentHeight = contentRef.current.offsetHeight;

    if (contentHeight > outerDivHeight) {
      setIsContentOverflowing(true);
    } else {
      setIsContentOverflowing(false);
    }
  }, []);

  let com1 = <div>test1</div>
  let com2 = <div>test2</div>


  const userData = {
    name:'kevin',
    education: 'Master Syracuse University',
    workExperience: [
    'This is work experice sample.This is work experice sample.This is work experice sample.This is work experice sample.',
    'This is work experice sample2.This is work experice sample2.This is work experice sample2.This is work experice sample2.This is work experice sample2',
    'This is work experice sample3.This is work experice sample3.This is work experice sample3.This is work experice sample3',
    'This is work experice sample4.This is work experice sample4.This is work experice sample4.This is work experice sample4',
    'This is work experice sample5.This is work experice sample5.This is work experice sample5.This is work experice sample5',
    'This is work experice sample6.This is work experice sample6.This is work expericessssssss'
    ]
  }

  const testHeight = () => {
    const name = userData.name;
    const education = userData.education;
    const workExperience = userData.workExperience;

    return <div>
      <div className=" text-2xl">{name}</div>
      <div>{education}</div>
      <div>{workExperience.map((item,index)=>{
        return <div>{item}</div>
      })}</div>
    </div>
  }

  return (
    <div className="w-full h-full">
        <div className="w-300 h-500 border-2 border-blue-300 p-2" ref={outerDivRef}>
          <div ref={contentRef}>
            {testHeight()}
            
          </div>
        </div>
        <div className="mt-10">{isContentOverflowing?"Overflow":"Not Overflow"}</div>
    </div>
  )
}


//   return (
//     <>
//       <div>
//         <SwitchTransition mode={mode}>
//           <CSSTransition
//             key={state}
//             nodeRef={nodeRef}
//             addEndListener={(done) => {
//               nodeRef.current?.addEventListener("transitionend", done, false);
//             }}
//             classNames="fade"
//           >
//             <div ref={nodeRef} className="button-container">
//               <Button onClick={() => setState((state: any) => !state)}>      
//                 {state ? com1 : com2}
//               </Button>
//             </div>
//           </CSSTransition>
//         </SwitchTransition>
//       </div>
//       <div></div>
//     </>
//   );
// }
