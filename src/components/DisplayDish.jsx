import React,{useState} from 'react'
import {FoodItem} from "../assets/data.js"
import {BsCurrencyRupee,BsFillStarFill} from "react-icons/bs"


const DisplayDish = ({selectedFilterType,selectedMenuType}) => {
    const [food,setFood] =useState(FoodItem)
    const filteredFood = food.filter((item) => {
        if (
          (selectedFilterType === '' || selectedFilterType === 'all' || item.type === selectedFilterType) &&
          (selectedMenuType === '' || selectedMenuType === 'all' || item.dish === selectedMenuType)
        ) {
          return true;
        }
        return false;
      });
      
    return (
        <div className='max-w-[840px] mx-auto px-4'>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredFood.map((item,index) => (
            <div  className="border shadow-lg rounded-md hover:scale-105 duration-300">
                {/* img */}
                <div key={index} className="">
                    <img className='w-full h-[120px] object-cover rounded-t-md' src={item.image_url} alt={item.name} />
                </div>
                {/* text */}
                <div className="flex justify-between">
                    <div className="">
                    <p className="m-1 font-medium">{item.name}</p>
                    <p className="flex items-center font-bold"><BsCurrencyRupee/>{item.price}</p>
                    </div>
                    <div className="flex items-center mr-4">
                    <p className="flex items-center gap-1 bg-green-600 text-white px-1 rounded-md">{item.rating.toFixed(1)}<BsFillStarFill/></p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
    )
}

export default DisplayDish