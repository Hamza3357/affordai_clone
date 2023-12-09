import { useState } from 'react'
import './App.css'
import Head from './components/Head'
import Herosection from './components/Herosection'
import Sectionone from './components/Sectionone'
import Sectiontwo from './components/Sectiontwo'


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
        </div>
    </>
  )
}

export default App
