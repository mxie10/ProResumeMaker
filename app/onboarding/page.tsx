'use client'
import { useRouter } from "next/navigation";
import { GiVintageRobot } from 'react-icons/gi';
import { BsPencilSquare } from 'react-icons/bs';
import { BsFillBoxFill } from 'react-icons/bs';
import { FaPencilAlt } from "react-icons/fa";
import CreateOption from './CreateOption';
import Button from '../component/input/Button';
import OnBoardingHeader from "../component/header/OnboardingHeader";
import { useRef, useState } from 'react';
import Input from '../component/input/Input';
import  { Key } from "react";
import templateList from '../static/template';
import styles from '../styles.module.css'
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web'


enum DIRECTION {
  OnBoarding = -1,
  AIGenerate = 0,
  ManuallyGenerate = 1,
  ChooseTempate = 2
}

const AIPanalFields = ["Resume Name","Industry","Job Title"];

interface TransitionItem {
  template: React.Component;
  props: { zoom: number; tempbgcolor?: string };
}

const Page:React.FC<{ open: boolean; templateList: TransitionItem[] }> = () => {

  const [direction, setDirection] = useState(DIRECTION.ChooseTempate);
  const [selected, setSelected] = useState("");
  const [mode, setMode] = useState<"out-in" | "in-out" | undefined>("out-in");
  const [state, setState] = useState<Key | null | undefined>(1);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(true)
  const router = useRouter();
  const transApi = useSpringRef()

  const springApi = useSpringRef()
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '20%', background: 'hotpink' },
    to: {
      size: open ? '100%' : '20%',
      background: open ? 'white' : 'hotpink',
    },
  })

  const transition = useTransition(open ? templateList : [], {
    ref: transApi,
    trail: 400 / templateList.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  const onChosen = (category: string) => {
    setSelected(category);
    console.log('selected is:'+category);
  }

  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ])

  const onNext = () => {
    if (selected === 'AI') {
      setDirection(DIRECTION.AIGenerate);
    } else {
      setDirection(DIRECTION.ManuallyGenerate); 
    }
    setState((state: any) => !state);
  }

  const testAnimation = () => {
    setDirection(DIRECTION.ChooseTempate);
    setOpen(true);
  }


  let bodyContent = (
    <div 
      className={`
          flex 
          flex-col
      `}
    >
      <div
        className={`
            flex
            flex-col
            md:flex-row
            items-center
            md:justify-between
            mt-14
        `}
      >
        <CreateOption
          icon={GiVintageRobot}
          description="Generate a example Resume"
          category="AI"
          direction={DIRECTION.AIGenerate}
          selected={selected}
          onClick={(category) => onChosen(category)}
        />
        <CreateOption
          icon={BsPencilSquare}
          description="Customize My Resume"
          category="Manual"
          direction={DIRECTION.ManuallyGenerate}
          selected={selected}
          onClick={(category) => onChosen(category)}
        />
      </div>
      <div
        className='
            relative 
            mt-16
        '
      >
        <div
          className='
              float-right
              md:w-36
              w-full
          '
        >
          <Button name="Next" onClick={onNext}/>
        </div>
      </div>
    </div>
    
  )

  //AIGenerate
  if(direction === DIRECTION.AIGenerate){
    bodyContent = (
      <div
        className={`
            mt-14
            flex
            flex-row
       `}
      >
        <div 
          className='
            hidden
            md:w-1/4
            md:block
          '
        >
          <BsFillBoxFill className=' w-36 h-36'/>
        </div>
        <div 
          className='
            bg-white 
            w-full
            md:w-3/4 
            border-2 
            border-neutral-200 
            p-8 
            rounded-lg 
            shadow-md
        '>
          <div className='mx-2'>
            <div className='text-2xl border-b-2 pb-5'>
              Generate your template resume
            </div>
            <div className='text-neutral-500 mt-4 text-lg'>
              Craft a resume using our template with just a few details. Edit anytime later.
            </div>
            <div 
              className='
                flex
                flex-row
                flex-wrap
                gap-2
                justify-between
                mt-3
              '
            >
              {AIPanalFields.map((item)=>{
                return <Input label={item} otherStyle="mt-2" textColor={'text-neutral-600'}/>
              })}
            </div>
            <div className='flex flex-row justify-between mt-6'>
              <Button name="Go back" width={'w-1/3'} onClick = {()=>setDirection(DIRECTION.OnBoarding)}/>
              <Button name="Next" width={'w-1/3'}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  //ManuallyGenerate
  if(direction === DIRECTION.ManuallyGenerate) {
    bodyContent = (
      <div
        className={`
            mt-14
            flex
            flex-row
       `}
      >
        <div 
          className='
            hidden
            md:w-1/4
            md:block
          '
        >
          <FaPencilAlt className=' w-36 h-36'/>
        </div>
        <div 
          className='
            bg-white 
            w-full
            md:w-3/4 
            border-2 
            border-neutral-200 
            p-8 
            rounded-lg 
            shadow-md
            box-border
        '>
          <div className='mx-2'>
            <div className='text-2xl border-b-2 pb-5'>
              Craft your own resume
            </div>
            <div className='text-neutral-500 mt-4 text-lg'>
            Input your career details, let our AI tools optimize and elevate your profile, and enjoy the flexibility to edit and refine anytime you wish.
            </div>
            <div 
              className='
                flex
                flex-row
                flex-wrap
                gap-2
                justify-between
                mt-3
              '
            >
              {AIPanalFields.map((item)=>{
                return <Input label={item} otherStyle="mt-2" textColor={'text-neutral-600'}/>
              })}
            </div>
            <div className='flex flex-row justify-between mt-6'>
              <Button name="Go back" width={'w-1/3'} onClick = {()=>setDirection(DIRECTION.OnBoarding)}/>
              <Button name="Next" width={'w-1/3'} onClick={testAnimation}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  //Choose Tempate
  if(direction === DIRECTION.ChooseTempate) {
    bodyContent = (
      <animated.div
        className={`${styles.item} mt-6 flex flex-row flex-wrap justify-evenly gap-6`}
      >
       {transition((style, item) => (
        <animated.div className={styles.item} style={{ ...style }}>
          <item.template {...item.props}/>
        </animated.div>
      ))}
      </animated.div>
    )
  }

  return (
    <div className='h-full w-full bg-neutral-50 md:px-60 md:py-12'>
      <OnBoardingHeader />
      {bodyContent}
    </div>
  )
}

export default Page;
