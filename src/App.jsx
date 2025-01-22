import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
function App() {
  // ******use of to *****
  // useGSAP(()=>{
  //   gsap.to(".box",{
  //     x:200,
  //     duration: 2,
  //     delay:2,
  //     y:100
  //   })
    // gsap.to("#blue",{
    //   x:200,
    //   duration: 2,
    //   delay:2
    // })
    // gsap.to("#green",{
    //   x:200,
    //   duration: 2,
    //   delay:2
    // })
// },[])
  

// ********** use of from ********
useGSAP(()=>{
  gsap.from(".box",{
      x:1000,
      rotate:360,
      opacity:0.5,
      scale:2,
      delay:1,
      duration:1,
      // repeat:1,
      yoyo:true,
  })
},[])

  return (
    <>
      <div id="red" className='box bg-red-500 h-[100px] w-[100px] m-5 rounded-md'>
      </div>
      <div id="blue" className='box bg-blue-500 h-[100px] w-[100px] m-5 rounded-md'>
      </div>
      <div id="green" className='box bg-green-500 h-[100px] w-[100px] m-5 rounded-md'>
      </div>
    </>
  )
}

export default App
