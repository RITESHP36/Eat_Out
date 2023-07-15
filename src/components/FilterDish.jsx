import React, { useState } from 'react'
import DisplayDish from './DisplayDish.jsx'

const FilterDish = () => {
  const [allFood,setFood] = useState(true)
  const [selectedFilterType, setSelectedFilterType] = useState('');
  const [selectedMenuType, setSelectedMenuType] = useState('');
 return (
    <div>
    <div className='mt-0 max-w-[840px] mx-auto p-4'>
      <p className="text-orange-500 font-bold text-3xl sm:text-4xl flex justify-center my-4">Top Rated Menu Items</p>
      <p className=" border-2 border-orange-500 w-fit px-4 py-1 ml-2 rounded-full text-orange-600 font-semibold text-lg  ">Filter</p>
      <div className="">
        <div>
          <p className="text-xl ml-4 my-2 font-medium">Filter Type</p>
          <button type='button' className=" border-2 border-orange-500 w-fit px-4 py-1 ml-2 rounded-full text-orange-600 font-semibold text-lg  cursor-pointer focus:bg-red-200"
          onClick={() => {setSelectedFilterType('all');
          setFood(false)}}
          >All</button>
          <button type='button' className=" border-2 border-orange-500 w-fit px-4 py-1 ml-2 rounded-full text-orange-600 font-semibold text-lg  cursor-pointer focus:bg-red-200"
          onClick={() => {setSelectedFilterType('veg');
          setFood(false)}}
          >VEG</button>
          <button type='button' className=" border-2 border-orange-500 w-fit px-4 py-1 ml-2 rounded-full text-orange-600 font-semibold text-lg  cursor-pointer focus:bg-red-200"
          onClick={() => {setSelectedFilterType('non_veg');
          setFood(false)}}
          >NON VEG</button>
        </div>
        <div>
        <p className="text-xl ml-4 my-2 font-medium">Filter by Menu</p>
          <button type='button' className=" border-2 border-orange-500 w-fit px-4 py-1 ml-2 rounded-full text-orange-600 font-semibold text-lg  cursor-pointer focus:bg-red-200"
          onClick={() => {setSelectedMenuType('all');
          setFood(false)}
          }>All</button>
          <button type='button' className=" border-2 border-orange-500 w-fit px-4 py-1 ml-2 rounded-full text-orange-600 font-semibold text-lg  cursor-pointer focus:bg-red-200"
          onClick={() => {setSelectedMenuType('roll');
          setFood(false)}
          }>Roll</button>
          <button type='button' className=" border-2 border-orange-500 w-fit px-4 py-1 ml-2 rounded-full text-orange-600 font-semibold text-lg  cursor-pointer focus:bg-red-200"
          onClick={() => {setSelectedMenuType('noodles');
          setFood(false)}
          }>Noodles</button>
          <button type='button' className=" border-2 border-orange-500 w-fit px-4 py-1 ml-2 rounded-full text-orange-600 font-semibold text-lg  cursor-pointer focus:bg-red-200"
          onClick={() => {setSelectedMenuType('north_indian');
          setFood(false)}
          }>North-Indian</button>
          <button type='button' className=" border-2 border-orange-500 w-fit px-4 py-1 ml-2 rounded-full text-orange-600 font-semibold text-lg  cursor-pointer focus:bg-red-200"
          onClick={() => {setSelectedMenuType('chinese')
          }
          }>Chinese</button>
          
        </div>
      </div>
    </div>
    {allFood&&<DisplayDish selectedFilterType='all' selectedMenuType='all'/>}
    {!allFood&&<DisplayDish selectedFilterType={selectedFilterType} selectedMenuType={selectedMenuType}/>}
    </div>
  )
}

export default FilterDish