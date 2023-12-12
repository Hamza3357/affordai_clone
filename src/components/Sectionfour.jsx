import React from 'react'
import savefromstress from '../assets/savefromstress.png'

const Sectionfour = () => {
  return (
    <div className='h-full mt-40 w-full flex flex-col justify-center items-center text-center'>
        <div className=' w-full flex flex-col justify-center items-center text-center'>
            <button className=' px-3 py-2 rounded-xl border-2 border-purple-600 text-purple-600 text-sm'>10x your productivity</button>
        </div>
        <div className='my-6 text-[36px] leading-[47px] font-bold'>
        Save yourself from stress & <br /> streamline your workflow
        </div>
        <div className='my-4 w-1/2 text-center justify-center text-[16px] leading-[21px] font-normal'>
        The average worker spends 9 hours per week looking through & gathering information from thick stacks of documents. With Afforai, you can save yourself 8 hours per week (plus a lot of headaches).
        </div>
        <div className='w-4/5 mx-auto my-28 '>
            <img src={savefromstress} className='h-full w-full object-cover' alt='Dashboard Image' />
        </div>
    </div>
  )
}

export default Sectionfour