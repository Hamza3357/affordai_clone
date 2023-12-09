import React from 'react'
import purplebackgroundimage from '../assets/purplebackgroundimage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import dashboard from '../assets/dashboard.png'

const Sectionone = () => {
  return (
    <>
    <div className='w-screen h-screen flex items-center justify-center'>
    
    <div style={{ backgroundImage: `url(${purplebackgroundimage})` }} className='h-[90vh] w-11/12 text-center mx-14 py-10 rounded-xl bg-cover bg-center'>
      <div className='text-xs flex font-thin items-center justify-center text-center'>

        <div className='p-1  mx-6 border border-gray-200 rounded-md'>
          <FontAwesomeIcon icon={faCheck} /><span className='mx-1 tracking-wide font-thin'>Summarize Key Findings</span>
        </div>
        <div className='p-1  mx-6 border border-gray-200 rounded-md'>
          <FontAwesomeIcon icon={faCheck} /><span className='mx-1 tracking-wide font-thin'>Compare Between Documents</span>
        </div>
        <div className='p-1  mx-6 border border-gray-200 rounded-md'>
          <FontAwesomeIcon icon={faCheck} /><span className='mx-1 tracking-wide font-thin'>Search For Answers</span>
        </div>
        <div className='p-1 mx-6 border border-gray-200 rounded-md'>
          <FontAwesomeIcon icon={faCheck} /><span className='mx-1 tracking-wide font-thin'>Ask in Any Language</span>
        </div>

      </div>

      <div className=' my-10 flex-col'>
          <button className=' bg-button text-white px-6 py-2 rounded-xl border border-gray-200 text-base'>Try for free</button>
          <button className='bg-gray-100  mx-4 px-6 py-2 rounded-xl border border-gray-200 text-base'>View pricing</button>
        </div>

    </div>
    </div>
    <div className='w-4/5 mx-auto mt-[-280px] overflow-hidden'>
    <img src={dashboard} className='h-full w-full object-cover rounded-xl' alt='Dashboard Image' />
</div>
  </>
  
  )
}

export default Sectionone