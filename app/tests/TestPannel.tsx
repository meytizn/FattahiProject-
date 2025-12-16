"use client "
import React from 'react'
import { AppDispatch, RootState } from '@/redux/store'; // Adjust the path accordingly
import { useDispatch, useSelector } from 'react-redux';
import counterSlice from '@/redux/counterSlice';
const TestPannel = () => {
    // counterSlice
        const counter = useSelector((state: RootState) => state.counters); 
         const dispatch = useDispatch<AppDispatch>(); 
        const {increment,decrement,reset} = counterSlice.actions
  return (
 
      <div className='shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.8)] w-full fixed bottom-0 h-[50px] flex flex-row justify-evenly 
      bg-[#010044]
      '>
        


                     <button onClick={() => dispatch(reset())}
           className=' w-[30%] p-2 bg-blue-500 text-white rounded'>
                reset
            </button>


          <button 
           className='w-[30%] p-2 bg-blue-500 text-white rounded'>
                Score :    {counter}
            </button>


        <button onClick={() => window.history.back()} className='w-[30%] p-2 bg-blue-500 text-white rounded'>
                Go Back
            </button>
      </div>
  )
}

export default TestPannel
