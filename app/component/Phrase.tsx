import React, { useState } from 'react';
import { FaCirclePlus } from "react-icons/fa6";

interface PhraseProps {
  content?: string;
}

const Phrase: React.FC<PhraseProps> = (props) => {
  const { content } = props;
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = () => {
    setIsClicked(true);
  };

  return (
    <>
      <div
        className={`
          p-1
          rounded-lg 
          border-2 
          border-neutral-400 
          cursor-pointer
          ${isClicked ? 'text-gray-500' : 'text-sky-600'}
        `}
        onClick={handleOnClick}
      >
        <div className='flex flex-row justify-center'>
          <div className='mt-1'>
            <FaCirclePlus />
          </div>
          <div className='ml-1'>
            {content ? content : 'Designed and implemented application using React with Redux, HTML 5, CSS3 to create professional UI. '}
          </div>
        </div>
      </div>
    </>
  );
};

export default Phrase;
