import { motion, useAnimation } from 'framer-motion';
import React from 'react';

function Featured() {
    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()]; // Animation hooks for all four cards

    const handleHover = (index) => {
        cards[index].start({ y: "0" });
    };

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    };

    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-[1px] pb-20 border-zinc-700'>
                <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
            </div>

            <div className='px-20'>
                <div className='grid grid-cols-2 gap-10 mt-10'>
                    {/* First Card */}
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className='cardcontainer relative w-full h-[75vh]'
                    >
                        <h1 className='absolute font-semibold flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                            {"FYDE".split('').map((item, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    className='inline-block'
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <img className='w-full h-full bg-cover' src="src/img/featured1.png" alt="Featured 1" />
                    </motion.div>

                    {/* Second Card */}
                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className='cardcontainer relative w-full h-[75vh]'
                    >
                        <h1 className='absolute font-semibold flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                            {"VISE".split('').map((item, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    className='inline-block'
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <img className='w-full h-full bg-cover' src="src/img/featured2.png" alt="Featured 2" />
                    </motion.div>

                    {/* Third Card */}
                    <motion.div
                        onHoverStart={() => handleHover(2)}
                        onHoverEnd={() => handleHoverEnd(2)}
                        className='cardcontainer relative w-full h-[75vh]'
                    >
                        <h1 className='absolute font-semibold flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                            {"TRAWA".split('').map((item, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "100%" }}
                                    animate={cards[2]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    className='inline-block'
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="Featured 3" />
                    </motion.div>

                    {/* Fourth Card */}
                    <motion.div
                        onHoverStart={() => handleHover(3)}
                        onHoverEnd={() => handleHoverEnd(3)}
                        className='cardcontainer  relative w-full h-[75vh]'
                    >
                        <h1 className='absolute font-semibold  flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                            {"BLEND".split('').map((item, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "100%" }}
                                    animate={cards[3]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    className='inline-block'
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png" alt="Featured 4" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
