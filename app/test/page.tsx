'use client';

// import React, { useRef, useState } from "react";
// import { SwitchTransition, CSSTransition } from "react-transition-group";
// import { Alert, Button, Container, Form } from "react-bootstrap";


// const modes = ["out-in", "in-out"];

// export default function App() {

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


  // const [mode, setMode] = React.useState<"out-in" | "in-out" | undefined>("out-in");
  // const [state, setState] = React.useState<Key | null | undefined>(1);
  // const helloRef = React.useRef<HTMLDivElement | null>(null);
  // const goodbyeRef = React.useRef<HTMLDivElement | null>(null);
  // const nodeRef = state ? helloRef : goodbyeRef;

//   const outerDivRef = useRef<any>();
//   const contentRef = useRef<any>(null);
//   const [isContentOverflowing, setIsContentOverflowing] = useState(false);

//   useEffect(() => {
//     const outerDivHeight = outerDivRef.current.offsetHeight;
//     const contentHeight = contentRef.current.offsetHeight;

//     if (contentHeight > outerDivHeight) {
//       setIsContentOverflowing(true);
//     } else {
//       setIsContentOverflowing(false);
//     }
//   }, []);

  // let com1 = <div>test1</div>
  // let com2 = <div>test2</div>


//   const userData = {
//     name:'kevin',
//     education: 'Master Syracuse University',
//     workExperience: [
//     'This is work experice sample.This is work experice sample.This is work experice sample.This is work experice sample.',
//     'This is work experice sample2.This is work experice sample2.This is work experice sample2.This is work experice sample2.This is work experice sample2',
//     'This is work experice sample3.This is work experice sample3.This is work experice sample3.This is work experice sample3',
//     'This is work experice sample4.This is work experice sample4.This is work experice sample4.This is work experice sample4',
//     'This is work experice sample5.This is work experice sample5.This is work experice sample5.This is work experice sample5',
//     'This is work experice sample6.This is work experice sample6.This is work expericessssssss'
//     ]
//   }

//   const testHeight = () => {
//     const name = userData.name;
//     const education = userData.education;
//     const workExperience = userData.workExperience;

//     return <div>
//       <div className=" text-2xl">{name}</div>
//       <div>{education}</div>
//       <div>{workExperience.map((item,index)=>{
//         return <div>{item}</div>
//       })}</div>
//     </div>
//   }

//   return (
//     <div className="w-full h-full">
//         <div className="w-300 h-500 border-2 border-blue-300 p-2" ref={outerDivRef}>
//           <div ref={contentRef}>
//             {testHeight()}
            
//           </div>
//         </div>
//         <div className="mt-10">{isContentOverflowing?"Overflow":"Not Overflow"}</div>
//     </div>
//   )
// }


// const [showButton, setShowButton] = useState(true);
//   const [showMessage, setShowMessage] = useState(false);
//   const nodeRef = useRef(null);
//   return (
//     <Container style={{ paddingTop: '2rem' }}>
//       {showButton && (
//         <Button
//           onClick={() => setShowMessage(true)}
//           size="lg"
//         >
//           Show Message
//         </Button>
//       )}
//       <CSSTransition
//         in={showMessage}
//         nodeRef={nodeRef}
//         timeout={300}
//         classNames="alert"
//         unmountOnExit
//         onEnter={() => setShowButton(false)}
//         onExited={() => setShowButton(true)}
//       >
//         <Alert
//           ref={nodeRef}
//           variant="primary"
//           dismissible
//           onClose={() => setShowMessage(false)}
//         >
//           <Alert.Heading>
//             Animated alert message
//           </Alert.Heading>
//           <p>
//             This alert message is being transitioned in and
//             out of the DOM.
//           </p>
//           <Button
//             variant="primary"
//             onClick={() => setShowMessage(false)}
//           >
//             Close
//           </Button>
//         </Alert>
//       </CSSTransition>
//     </Container>
//   );
// }

import React, { useState, useEffect } from 'react';

const TextEditor = ({ text }:{text:any}) => {
  const [pages, setPages] = useState<string[]>([]);

  useEffect(() => {
    if (text === undefined) {
      return;
    }

    const pageHeight = 500; // 页面高度
    const words:any = text.split(' ');
    let currentPage:Array<string>[] = [];
    let currentHeight = 0;

    words.forEach((word: any[]) => {
      // 假设每个单词的高度是固定的，实际上你可能需要更复杂的逻辑来处理不同字体、字号等的情况
      const wordHeight = 20; // 单词高度

      if (currentHeight + wordHeight > pageHeight) {
        setPages(prevPages => [...prevPages, currentPage.join(' ')]); // 分页
        currentPage = [word];
        currentHeight = wordHeight;
      } else {
        currentPage.push(word);
        currentHeight += wordHeight;
      }
    });

    if (currentPage.length > 0) {
      setPages(prevPages => [...prevPages, currentPage.join(' ')]); // 添加最后一页
    }
  }, [text]);

  return (
    <div className="page">
      {pages.map((page, index) => (
        <div className=' bg-red-300 mt-10'>
          <p key={index}>{page}</p>
        </div>
      ))}
    </div>
  );
};

const Page = () => {
  const text = 'I have had both consoles and PC, both connected to the same TV, using both from couch. Console is only for exclusives though, since PC offers me higher quality of experience and I can afford it. That higher quality comes with higher price for hardware (though lower for software) and bit more fiddling with graphics options. But yeah the positives vastly outweigh negatives.I have had both consoles and PC, both connected to the same TV, using both from couch. Console is only for exclusives though, since PC offers me higher quality of experience and I can afford it. That higher quality comes with higher price for hardware (though lower for software) and bit more fiddling with graphics options. But yeah the positives vastly outweigh negatives.I have had both consoles and PC, both connected to the same TV, using both from couch. Console is only for exclusives though, since PC offers me higher quality of experience and I can afford it. That higher quality comes with higher price for hardware (though lower for software) and bit more fiddling with graphics options. But yeah the positives vastly outweigh negatives.I have had both consoles and PC, both connected to the same TV, using both from couch. Console is only for exclusives though, since PC offers me higher quality of experience and I can afford it. That higher quality comes with higher price for hardware (though lower for software) and bit more fiddling with graphics options. But yeah the positives vastly outweigh negatives.I have had both consoles and PC, both connected to the same TV, using both from couch. Console is only for exclusives though, since PC offers me higher quality of experience and I can afford it. That higher quality comes with higher price for hardware (though lower for software) and bit more fiddling with graphics options. But yeah the positives vastly outweigh negatives.I have had both consoles and PC, both connected to the same TV, using both from couch. Console is only for exclusives though, since PC offers me higher quality of experience and I can afford it. That higher quality comes with higher price for hardware (though lower for software) and bit more fiddling with graphics options. But yeah the positives vastly outweigh negatives.';
  return (
    <TextEditor text={text}/>
  )
}

export default Page;

