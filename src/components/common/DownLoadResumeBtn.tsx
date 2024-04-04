import React from 'react';
import { HoverBorderGradient } from '../ui/hover-border-gradient';

const DownLoadResumeBtn = () => {
  return (
    <HoverBorderGradient
      containerClassName="rounded-full"
      as="button"
      className=""
    >
      <a href="https://drive.google.com/file/d/1y_-MxKZrohq_6p2sIckGhcPhlfK7HVl7/view?usp=sharing" target="_blank" className='btn'>
        <span>Resume</span>
      </a>
    </HoverBorderGradient>
  );
};

export default DownLoadResumeBtn;