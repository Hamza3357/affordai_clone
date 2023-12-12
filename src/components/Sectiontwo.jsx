import React from 'react'
import users from '../assets/users.png'
import Marquee from 'react-fast-marquee'


const Sectiontwo = () => {
  return (


<div className='h-[60vh] w-full flex flex-col justify-center items-center text-center'>

<div className='mb-4'>Loved by <span className='text-[#AA79FD]'>20,000+</span> users around the world</div>
<img src={users} className='object-cover w-1/4' />



</div>


  )
}

export default Sectiontwo