// pages/index.tsx
'use client'; // This directive ensures the component is a Client Component
import Link from 'next/link';
import React from 'react';
import { AppDispatch, RootState } from '@/redux/store'; // Adjust the path accordingly
import { useDispatch, useSelector } from 'react-redux';
import TestPannel from './TestPannel';



const Page = () => {
    
    // const questions = [
    //     { id: 1, title: "pizza",status:false,img:'icons/qrcode.png',imganswer:'icons/qrgreen.png' ,  description: "Delicious cheese and tomato pizza." },
    //     { id: 2, title: "lasagna",status:false,img:'icons/qrcode.png' ,imganswer:'icons/qrgreen.png' ,  description: "Layered pasta with meat and cheese." },
    //     { id: 3, title: "pasta",status:false,img:'icons/qrcode.png' ,imganswer:'icons/qrgreen.png' ,  description: "pasta beef burger with toppings." },
    //     { id: 4, title: "Fish",status:false,img:'icons/qrcode.png' ,imganswer:'icons/qrgreen.png' ,  description: "Fresh fish cooked to perfection." },
    // ];

    const questions = useSelector((state: RootState) => state.words); 


    return (
        <>
        <div className='flex flex-row justify-around gap-y-2 flex-wrap  p-3'>
            {questions.map((item) => (
                <div className='w-[45%] md:w-[20%] h-[200px]  flex flex-col justify-center items-center content-center' key={item.id}>
                     <Link href={`/tests/${item.id}`}>
                    <img src='/icons/qrcode.png' className='w-[150px]' />
                    {/* <span>{item.title}</span> */}
                  </Link> 
                </div>
            ))}
        </div>
<TestPannel/>
</>

    );
};

export default Page;
