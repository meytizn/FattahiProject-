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
 
      <div className='
       w-full fixed bottom-0 h-[58px] border-t-2 shadow-2xl  flex flex-row justify-between 
       bg-white border-5 pt-1 border-white
      '>
        


                     <button onClick={() => dispatch(reset())}
           className=' w-[30%] p-2  bg-[#030162] text-white rounded'>
                reset
            </button>


          <button 
           className='w-[30%] p-2 bg-[#030162] text-white  rounded'>
                Score   :    {counter}
            </button>


        <button onClick={() => window.history.back()} className='w-[30%] p-2 bg-[#030162] text-white rounded'>
                Go Back
            </button>
      </div>
  )
}

export default TestPannel
