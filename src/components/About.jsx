import React from 'react';

function About() {
    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>
                Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds,
                sell products, explain complex ideas, and hire great people.
            </h1>

            <div className='w-full flex gap-5 pt-10 mt-20 border-t-[1px] border-[#a16562]'>
                <div className='w-1/2'>
                    <h1 className='text-7xl'>Our Approach :</h1>
                    <button className='flex uppercase gap-4 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>
                        Read More
                        <div className='arrow'></div>
                    </button>
                </div>

                <div className='w-1/2 h-[70vh] bg-white rounded-3xl overflow-hidden'>
                    <img 
                        className='w-full h-full object-cover' 
                        src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" 
                        alt="About Ochi" 
                    />
                </div>
            </div>

            <style jsx>{`
                .arrow {
                    width: 0;
                    height: 0;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    border-top: 10px solid white;
                    margin-left: 10px;
                }
            `}</style>
        </div>
    );
}

export default About;
