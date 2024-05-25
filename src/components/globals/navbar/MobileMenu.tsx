import { navItems } from '@/data/navbar';
import React, { useEffect } from 'react';
import BottomGradient from '../../ui/BottomGradient';
import DownLoadResumeBtn from '../../common/DownLoadResumeBtn';
import MenuButton from './MenuButton';
import { motion } from 'framer-motion';

interface PropsType {
  isOpen: boolean;
  setIsOpen: any
}

const MobileMenu: React.FC<PropsType> = ({ isOpen, setIsOpen }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <div className={`menu-mobile ${isOpen && 'active'}`}>

      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <nav className="nav-mobile">


        <motion.ul

          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}

          className="navbar__items_mobile">
          {
            navItems.map((item, i) => {
              return (
                <li key={i}>
                  <a href={item.link} onClick={() => setIsOpen(false)} className="group/btn font-extralight">{item.name} <BottomGradient /></a>
                </li>
              )
            })
          }
          <li>
            <DownLoadResumeBtn />
          </li>
        </motion.ul>
      </nav>
    </div>
  );
};

export default MobileMenu;