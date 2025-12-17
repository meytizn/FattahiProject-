"use client";
import React, { useEffect } from 'react';
import { AppDispatch, RootState } from '@/redux/store'; // Adjust the path accordingly
import { useDispatch, useSelector } from 'react-redux';
import counterSlice from '@/redux/counterSlice';
import { useRouter } from 'next/navigation';

const TestPannel = () => {
    const counter = useSelector((state: RootState) => state.counters); 
    const dispatch = useDispatch<AppDispatch>(); 
    const { reset } = counterSlice.actions;
    const router = useRouter(); // Initialize useRouter

    useEffect(() => {
        if (counter <= -30) {
            router.push('/loserPage'); // Redirect to /loserpage
        } else if (counter >= 30) {
            router.push('/winnerpage'); // Redirect to /winnerpage
        }
    }, [counter, router]); // Dependency array


        const restartHandler=()=>{
            dispatch(reset())
            router.push('/tests');
        }

    return (
        <div className='w-full fixed bottom-0 h-[58px] border-t-2 shadow-2xl flex flex-row justify-between bg-white border-5 pt-1 border-white'>
            <button onClick={restartHandler} className='w-[30%] p-2 bg-[#030162] text-white rounded'>
                Restart
            </button>

            <button className='w-[30%] p-2 bg-[#030162] text-white rounded'>
                Score: {counter}
            </button>

            <button onClick={() => window.history.back()} className='w-[30%] p-2 bg-[#030162] text-white rounded'>
                Go Back
            </button>
        </div>
    );
}

export default TestPannel;
