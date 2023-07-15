import React from 'react'

const Featured = () => {
  return (
    <div>
        <div className="max-w-[840px] mx-auto px-4  flex flex-col gap-y-2 sm:grid sm:grid-cols-3  sm:gap-x-2 ">
            <div className="h-[150px] sm:max-h-40 relative">
                <div className="bg-black/50 text-white font-semibold flex flex-col justify-center absolute z-20 w-full h-full">
                    <p className="pl-2 text-lg">New Restaurants Added</p>
                    <p className="pl-2 text-lg">Every Week</p>
                    <button className="ml-2 px-4 h-8 w-fit mr-2 border-2 border-red-500 rounded-full flex items-center bg-red-500 text-white font-semibold" type="button">Order Now</button>
                </div>
                <div>
                    <img className='object-cover w-full h-[150px] sm:max-h-40' src="https://images.unsplash.com/photo-1593160688806-4a3604ef4cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
            </div>
            <div className="h-[150px] sm:max-h-40 relative">
                <div className="bg-black/40 text-white font-semibold flex flex-col justify-center absolute z-20 w-full h-full">
                    <p className="pl-2 text-lg">First order</p>
                    <p className="pl-2 text-lg">Get 40% off</p>
                    <button className="ml-2 px-4 h-8 w-fit mr-2 border-2 border-red-500 rounded-full flex items-center bg-red-500 text-white font-semibold" type="button">Order Now</button>
                </div>
                <div>
                    <img className='object-cover w-full h-[150px] sm:max-h-40' src="https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGluZGlhbiUyMHJlc3RhdXJhbnR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=600&q=60" alt="" />
                </div>
            </div>
            <div className="h-[150px] sm:max-h-40 relative">
                <div className="bg-black/40 text-white font-semibold flex flex-col justify-center absolute z-20 w-full h-full">
                    <p className="pl-2 text-lg">Birthday Coming up?</p>
                    <p className="pl-2 text-lg">Order A Cake</p>
                    <button className="ml-2 px-4 h-8 w-fit  border-2 border-red-500 rounded-full flex items-center bg-red-500 text-white font-semibold" type="button">Order Now</button>
                </div>
                <div>
                    <img className='object-cover w-full h-[150px] sm:max-h-40' src="https://images.unsplash.com/photo-1611522499193-84baf098acf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJpcnRoZGF5JTIwY2FrZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                </div>
            </div>
                
        </div>
    </div>
  )
}

export default Featured