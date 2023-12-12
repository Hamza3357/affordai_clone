import { useState } from 'react';
import React from 'react'
import img1 from '../assets/img1.png';
import producthunt from '../assets/producthunt.png'

import '../App.css'

const Users = () => {
 
  return (
    <>

              <div className=' flex w-1/3'>
                  <div className='align-middle mx-4 justify-center items-center h-[60vh] flex'>

                      <div className='h-[50vh] p-7 w-full flex flex-col border rounded-lg justify-center mb-8 card-container'>
                          <div className='text-[16px] leading-6 pb-10 '>
                              This looks good to ease out the data analysis task for the users. But in the Affroi build guide, I couldn't see how efficiently the data analysis is done. Guess I have to take a subscription for it. The product looks great and has a User-friendly interface. Congrats on the launch.
                          </div>

                          <div className='flex justify-between border-t items-center pt-7  '>

                              <div className='flex align-middle items-center '>
                                  <img src={img1} className='w-9 h-9' alt='User' /><span className='text-[14px] ml-2'>Anatolii, Founder of Savvy Planning Systems</span>
                              </div>

                              <div className='w-auto border border-orange-500 rounded-lg flex align-middle justify-center items-center text-left p-1'>
                                  <img src={producthunt} className='w-4 h-4' alt='Product Hunt' /><span className='text-[12px] leading-4 ml-1 text-orange-500'>View on Product Hunt</span>
                              </div>
                          </div>
                      </div>



                  </div>
              </div>


    
 


    </>
  )
}

export default Users