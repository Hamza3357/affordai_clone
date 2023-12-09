import React from 'react';
import appsumo from '../assets/appsumo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Herosection = () => {
  return (
    <div className='main-screeen-div h-75vh w-full flex flex-col items-center justify-center'>
      
      {/* Yellow div */}
      <div className='w-1/4 h-12 flex dark-yellow-gradient text-center items-center justify-center rounded-xl border-black border-2 mt-10'>
        <div className='align-middle flex items-center mx-2'>
          <img src={appsumo} width={30} height={30} alt="AppSumo Logo" />
        </div>
        <div className='flex items-center'>
          <div className='mx-2'>
            <span className='text-[13px] font-bold'>Now on AppSumo</span>
          </div>
          <div className='border border-black px-2 py-1 rounded-md light-yellow-gradient items-center text-center'>
            <span className='text-[13px] font-bold'>Get Lifetime deal </span>
          <FontAwesomeIcon className='text-xs' icon={faAngleRight} />
          </div>
          

          
        </div>
      </div>

      {/* Content div */}
      <div className='content-div flex flex-col items-center justify-center'>
        <div className='text-[48px] font-semibold m-10 leading-[62px] text-center'>
          Your second brain for <br /> maximizing productivity
        </div>
        <div className='text-[16px] font-light leading-[24px] w-1/2 text-center'>
          Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to produce trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements and extract the key findings you need.
        </div>
      </div>
    </div>
  );
};

export default Herosection;
