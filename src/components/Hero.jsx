import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className=" text-white 
         max-w-[840px] mx-auto p-4">
            <div className="max-h-[400px] relative">
                <div className="absolute w-full h-full max-h-[400px] max-w-[840px] flex flex-col gap-1 justify-center z-10 bg-black/50">
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pl-8  font-bold">Savor the <span className='text-orange-500'>Exquisite</span></p>
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pl-8 font-bold"><span className='text-orange-500'>Flavour</span> of India</p>
                </div>
                <div className="">
                    <img className="w-full max-h-[400px] object-cover" src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero