import React from 'react'




function Cards() {
    return (
        <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>

            <div className='cardcontainer h-[50vh] w-1/2'>
                <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center   '>


                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />

                    <button className='absolute px-5 py-1 border-2  left-4 bottom-4 rounded-full text-[green] bg-green'>&copy; 2024-2025</button>


                </div>

            </div>
            <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>


                <div className='card relative rounded-xl w-full h-full bg-[#192826] flex items-center justify-center  '>

                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />

            <button className='absolute px-2 py-0.5 border-2  left-5 bottom-5 rounded-full  '>Rating 5.0 on Clutch</button>


                </div>

                <div className='card relative rounded-xl w-full h-full bg-[#192826] flex items-center justify-center  '>

                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />

                    <button className='absolute px-3 py-0.5 border-2  left-3 bottom-3 right-3 rounded-full '>Business Bootcamp Alumni</button>


                </div>
            </div>
        </div>
    )
}



export default Cards