import React from 'react'

const CardOem = () => {
  return (
    <div class="w-[410px]">
    <div class="relative group">
      <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div class="relative pr-32 pl-6 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col items-start gap-2 justify-start ">
        <p className="text-xl font-bold">Honda City</p>
        <p className="text-sm ">Year: 2015</p>
        <p  className="text-sm " >List Price: Rs.1000000</p>
        <p  className="text-sm " >Available Colors:</p>
        <p  className="text-sm " >Mileage: 5000 miles</p>
        <p  className="text-sm " >Power: 120 BHP</p>
        <p  className="text-sm " >Max Speed: 180 mph</p>
      </div>
    </div>
  </div>
  )
}

export default CardOem