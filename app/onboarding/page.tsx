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
import templatesList from '../static/template';
import styles from '../styles.module.css'
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web'
import { IconType } from "react-icons";


enum STEP {
  OnBoarding = 0,
  AIOrManuallyGenerate = 1,
  ChooseTempate = 2
}

const panalFields = ["Resume Name","Industry","Job Title"];

interface TransitionItem {
  template: React.Component;
  props: { zoom: number; tempbgcolor?: string };
}

const Page:React.FC<{ open: boolean; templateList: TransitionItem[] }> = () => {

  const [step, setStep] = useState(STEP.OnBoarding);
  const [prevDirection, setPreDirection] = useState(STEP.OnBoarding);
  const [category, setCategory] = useState("");
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const [animateTemplate, setAnimateTemplate] = useState(false)
  const router = useRouter();
  const transApi = useSpringRef()

  const springApi = useSpringRef()
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '20%', background: 'hotpink' },
    to: {
      size: animateTemplate ? '100%' : '20%',
      background: animateTemplate ? 'white' : 'hotpink',
    },
  })

  const transitions = useTransition(animateTemplate ? templatesList : [], {
    ref: transApi,
    trail: 400 / templatesList.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  const onChosen = (category: string) => {
    setCategory(category);
    console.log('category is:'+category);
  }

  useChain(animateTemplate ? [springApi, transApi] : [transApi, springApi], [
    0,
    animateTemplate ? 0.1 : 0.6,
  ])

  const onNext = () => {
    if(step === 1) setAnimateTemplate(true);
    step === 2 ? router.push('../resumeCreation') : setStep(step+1);
  }

  const onBack = () => {
    if(step === 2) setAnimateTemplate(false);
    setStep(step-1);
  }

  interface directionModel {
    title?:string;
    description?:string;
    icon?:IconType;
  }

  const DirectionModel:React.FC<directionModel> = (props) => {
    const {title,description,icon:Icon} = props;
    return (
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
           {Icon && <Icon className='w-36 h-36' />}
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
              {/* Craft your own resume */}
              {title}
            </div>
            <div className='text-neutral-500 mt-4 text-lg'>
            {/* Input your career details, let our AI tools optimize and elevate your profile, and enjoy the flexibility to edit and refine anytime you wish. */}
            {description}
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
              {panalFields.map((item)=>{
                return <Input label={item} otherStyle="mt-2" textColor={'text-neutral-600'}/>
              })}
            </div>
            <div className='flex flex-row justify-between mt-6'>
              <Button name="Go back" width={'w-1/3'} onClick = {onBack}/>
              <Button name="Next" width={'w-1/3'} onClick={onNext}/>
            </div>
          </div>
        </div>
      </div>
    )
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
          type="AI"
          category={category}
          onClick={(category) => onChosen(category)}
        />
        <CreateOption
          icon={BsPencilSquare}
          description="Customize My Resume"
          type="Manual"
          category={category}
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

  //Manually Generate or AI Generate
  if(step === STEP.AIOrManuallyGenerate) {
    let title = category === 'AI' ? 'Generate your template resume' : 'Craft your own resume';
    let description = category === 'AI' ? 
      'Generate a resume using our template with just a few details. Edit anytime later.' 
    : 'Input your career details, let our AI tools optimize and elevate your profile, and enjoy the flexibility to edit and refine anytime you wish.';
    let icon = category === 'AI' ? BsFillBoxFill :FaPencilAlt;
    bodyContent = (
      <DirectionModel title={title} description={description} icon = {icon}/>
    )
  }

  //Choose Tempate
  if(step === STEP.ChooseTempate) {
    bodyContent = (
      <div className="-mt-5">
        <div className="flex justify-center items-center text-3xl font-bold">Please select your favorite resume template</div>
        <hr className="mt-3 bg-slate-400"/>
        <animated.div
          className={`${styles.item} mt-6 flex flex-row flex-wrap justify-evenly gap-6`}
        >
        {/* <item.template {...item.props}/> */}
        {transitions((style, item) => (
          <animated.div className={styles.item} style={{ ...style }}>
              <img className = 'w-full h-full lg:w-256 lg:h-319' src={item.source}/>
              {/* <img src={item.source} style={{width:'50%',height:'auto', boxSizing:'border-box'}} /> */}
          </animated.div>
        ))}
        </animated.div>
        <div className='p-6'>
            <div className="flex flex-row justify-between gap-2">
              <Button name="Go back" width={'w-1/2'} onClick = {onBack}/>
              <Button name="Next" width={'w-1/2'} onClick={onNext}/>
            </div>
        </div>
      </div>
    )
  }

  return (
    <div className='w-full bg-neutral-50 md:px-60 md:pt-12'>
      {step === STEP.ChooseTempate ? null : <OnBoardingHeader />}
      {bodyContent}
    </div>
  )
}

export default Page;
