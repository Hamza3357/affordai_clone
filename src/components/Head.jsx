import React from 'react'
import logo from '../assets/logo.png'

const Head = () => {
  return (
    <div className='px-12'>
      <div className='backdrop-blur-xl mt-6 border border-gray-300 rounded-2xl h-14 w-full align-middle justify-between py-5 px-10 flex bg-blur-lg items-center'>
        <div className='flex align-middle h-12 w-1/4 items-center' >
            <img src={logo} alt='logo' className='h-6 w-6 mx-2' />
            <p className='font-bold'>Afforai</p>
        </div>
        <div className='align-middle content-center justify-center'>
        <ul className='flex align-middle font-manrope font-semibold text-sm '>
          <li className='mx-5'>Affiliate</li>
          <li className='mx-5'>Pricing</li>
          <li className='mx-5'>Testimonials</li>
          <li className='mx-5'>Help Center</li>
        </ul>
        </div>
        <div>
          <button className='bg-gray-100 px-3 mx-4 py-1 rounded-lg border border-gray-200 text-base'>Log in</button>
          <button className=' bg-button  text-white p-6 px-3 py-1 rounded-lg border border-gray-200 text-base '>Try for free</button>
        </div>
        </div>
    </div>
  )
}

export default Head