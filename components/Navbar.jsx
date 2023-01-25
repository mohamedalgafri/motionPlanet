'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}
    >
          <div className="flex gap-4 z-10">
            {socials.map((social) => (
              <a href={social.urlS} target="_blank" rel="noreferrer">
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
              </a>

            ))}
          </div>
      {/* <h2 className="font-extrabold text-[24px] leading-[30.24px] mr-auto ml-auto text-white">
        MOTION PLANET
      </h2> */}
      <img
        src="/logoP.png"
        alt="menu"
        className="w-[140px] h-[140px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
