import React from 'react'
import sectionthreeimg from '../assets/sectionthreeimg.png'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sectionthree = () => {
  return (
    <div className='px-32 flex'>
      <div className='flex-col justify-start w-1/2 pr-20'>
        <div className='text-[36px] leading-[47px] font-bold'>
        Say goodbye to long, tiresome documents
        </div>
        <div className='my-4 text-[16px] leading-[21px] font-normal'>
        Afforai seamlessly translates documents, files, spreadsheets & websites, filtering out what you don’t need & answering your specific questions within seconds.
        </div>
        <div>

          <div className='text-base leading-6 font-bold text-customColor mt-4'><FontAwesomeIcon icon={faCircleCheck} /><span className='ml-3'>A whip smart research assistant</span></div>
          <div className='text-base leading-6 font-bold text-customColor mt-4'><FontAwesomeIcon icon={faCircleCheck} /><span className='ml-3'>We speak every language</span></div>
          <div className='text-base leading-6 font-bold text-customColor mt-4'><FontAwesomeIcon icon={faCircleCheck} /><span className='ml-3'>Reliable data citation for answers</span></div>
          <div className='text-base leading-6 font-bold text-customColor mt-4'><FontAwesomeIcon icon={faCircleCheck} /><span className='ml-3'>Fort-Knox level data security</span></div>
        </div>

      </div>

      <div className='w-1/2'>
        <img src={sectionthreeimg} className='object-contain' />

      </div>
    </div>
  )
}

export default Sectionthree