import React, { useEffect } from 'react'
import axios from 'axios';
import "./App.css"
import HeaD from './Components/ProductPage/Head/Head'
import Mid1 from './Components/ProductPage/Mid1/Mid1'
import Mid2 from './Components/ProductPage/Mid2/Mid2'
import Mid3 from './Components/ProductPage/Mid3/Mid3'
import Mid4 from './Components/ProductPage/Mid4/Mid4'
import Header from './Components/Common/Header/Header'
import Our_Partners from './Components/ProductPage/Our_Partners/Our_Partners'
// const fetchProduct = async() =>{
//   const data =await axios.use('http://localhost:8000/Products')

// }
// useEffect(()=>{
//   fetchProduct();
// },[])

const App = () => {
  return (
    <>
      <Header/>
      <div>Home</div>
      {/* <HeaD />
      <Mid1 />
      <Mid2 />
      <Mid3 />
      <Mid4 />
      <Our_Partners /> */}

    </>

  )
}

export default App

