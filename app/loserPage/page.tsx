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
        <div className='w-full text-2xl text-center h-[80vh] bg-red-500  flex flex-col gap-30 items-center content-center justify-items-center  justify-center '>
            <h1>you lose the game</h1>
            <button onClick={resetHandler} className='w-[70%] p-2 bg-[#030162] text-white rounded  cursor-pointer border-2 border-white shadow-2xs'>
                Restart
            </button>
        </div>
    );
}

export default Page; // Ensure the export matches the component name
