import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className='w-full py-16 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'
    >
      <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>

        {/* Marquee text container */}
        <motion.div
          className='flex'
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 7 }}
        >
          <h1 className='text-[20vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pt-4 pb-4 font-semibold pr-20'>
            We are Ochi
          </h1>
          <h1 className='text-[20vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pt-4 pb-4 font-semibold pr-20'>
            We are Ochi
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
