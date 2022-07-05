import React, { useRef } from 'react';

import { motion, useCycle } from 'framer-motion';
import { MobileMenuD } from './MobileMenu.d';
import { useDimensions } from '~layout/Header/components/MobileMenu/useDimension';

// components
import { MenuToggle } from '~layout/Header/components/MenuToggle';

const MobileMenu: React.FC<MobileMenuD> = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 98% 3%)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(30px at 98% 3%)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            height: '100vh',
            width: '300px',
            background: '#fff',
          }}
          variants={sidebar}
        />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  );
};

export default MobileMenu;
