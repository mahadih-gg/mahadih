import React from 'react';
import { HoverBorderGradient } from '../ui/hover-border-gradient';

interface PropsType {
  icon?: React.ReactElement;
  children: React.ReactElement;
  className?: string;
  link?: string;
  target?: string;
  onClick?: () => void;
}

const Button: React.FC<PropsType> = ({ icon, children, className, link, target, onClick }) => {
  return (
    <HoverBorderGradient
      containerClassName="rounded-full"
      as="button"
      className=""
    >
      {
        !!link ?
          <a href={link} target={target} className={`${className} btn`}>
            {icon}
            {children}
          </a>
          :
          <button className={`${className} btn`} onClick={onClick}>
            {children}
          </button>
      }
    </HoverBorderGradient>
  );
};

export default Button;