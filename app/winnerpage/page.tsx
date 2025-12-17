"use client";
import React from 'react';
import { AppDispatch, RootState } from '@/redux/store'; // Adjust the path accordingly
import { useDispatch, useSelector } from 'react-redux';
import counterSlice from '@/redux/counterSlice';
import { useRouter } from 'next/navigation';

const Page = () => { // Change the component name to start with an uppercase letter
    const dispatch = useDispatch<AppDispatch>();
    const { reset } = counterSlice.actions;
    const router = useRouter(); // Initialize useRouter
    
    const resetHandler = ()=>{
         dispatch(reset())
         router.push('/tests');
    }
    return (
        <div className='w-full text-[45px] h-[80vh] bg-green-500  flex flex-col gap-30 items-center content-center justify-items-center  justify-center '>
            <h1>You Won the Game </h1>
            <button onClick={resetHandler} className='w-[30%] p-2 bg-[#030162] text-white rounded  cursor-pointer border-2 border-white shadow-2xs'>
                Restart
            </button>
        </div>
    );
}

export default Page; // Ensure the export matches the component name
