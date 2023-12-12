import { useState } from 'react'
import './App.css'
import Head from './components/Head'
import Herosection from './components/Herosection'
import Sectionone from './components/Sectionone'
import Sectiontwo from './components/Sectiontwo'
import Sectionthree from './components/Sectionthree'
import Sectionfour from './components/Sectionfour'
import Users from './components/Users'
import Marquee from 'react-fast-marquee'


function App() {
  return (
    <>
      <div>
        <div className='sticky top-0 '>
        <Head />
        </div>
        <Herosection />
        <Sectionone />
        <Sectiontwo />
        <Sectionthree />
        <Sectionfour />  
 
<Marquee speed={70} delay={0} direction='left' pauseOnClick='true'  >
<div className=' justify-center  flex w-1/3  content-center items-center align-middle ' >
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />

        </div>
        </Marquee>

       

        </div>
    </>
  )
}

export default App
