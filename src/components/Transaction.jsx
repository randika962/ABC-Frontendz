import React from 'react'

import moneyImg from '../assets/money1.png'

// import {Link} from "react-router-dom";


export default function Transaction() {
  return (
      
    <div>
    <nav class="flex items-center justify-between flex-wrap bg-violet-300 p-6">
<div class="flex items-center flex-shrink-0 text-black mr-6">
<svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" ></svg>
<span class="font-semibold text-3xl tracking-tight">Transaction</span>
</div>
<div class="block lg:hidden">
<button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">

</button>
</div>
<div class="items-center hidden space-x-8 lg:flex ">
<div class="text-base lg:flex-grow">
</div>
<div>
<a href="/admin" class="inline-block  px-4 py-2 leading-none border rounded font-semibold text-lg text-balck border-white hover:border-transparent hover:text-violet-400 hover:bg-white mt-4 lg:mt-0">Back</a>

</div>
</div>

</nav>
{/* <div className="flex flex-wrap justify-center">
<img
  src={moneyImg}
  class="p-1 bg-white border rounded max-w-sm"
  alt="..."
/> */}


{/* <img className='w-full min-h-full object-cover' src={addash1Img} alt="" /> */}

</div>
// </div>

  )
}
