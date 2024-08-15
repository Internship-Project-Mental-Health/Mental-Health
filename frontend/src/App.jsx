import React, { useEffect } from 'react'
import "./App.css"
import Header from './Components/Common/Header/Header'
import Section1 from './Components/HomePage/Section1/Section1'
import Section0 from './Components/HomePage/Section0/Section0'
import Section0_1 from './Components/HomePage/Section0_1/Section0_1';
import FooterNew from './Components/Common/Footer/FooterNew'


const App = () => {
 
  return (
    <>
      <Header />
      {/* <div>Home</div> */}

      {/* <h1>Home</h1> */}
      <Section0/>
      <Section0_1/>
      <Section1/>
      <FooterNew/>
    </>

  )
}

export default App