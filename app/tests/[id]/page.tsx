// pages/test/[id]/page.tsx
'use client'; // This directive ensures the component is a Client Component
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { AppDispatch, RootState } from '@/redux/store'; // Adjust the path accordingly
import { useDispatch, useSelector } from 'react-redux';
import counterSlice from '@/redux/counterSlice';
import TestPannel from '../TestPannel';


const DetailView = () => {
    const { id } = useParams(); // Get the dynamic route parameter
    const [answer,setAnswer]=useState("")

    // Sample questions array (this could be fetched from an API)
    // const questions = [
    //     { id: 1, title: "pizza",status:false,img:'icons/qrcode.png',imganswer:'icons/qrgreen.png' ,  description: "Delicious cheese and tomato pizza." },
    //     { id: 2, title: "lasagna",status:false,img:'icons/qrcode.png' ,imganswer:'icons/qrgreen.png' ,  description: "Layered pasta with meat and cheese." },
    //     { id: 3, title: "pasta",status:false,img:'icons/qrcode.png' ,imganswer:'icons/qrgreen.png' ,  description: "pasta beef burger with toppings." },
    //     { id: 4, title: "Fish",status:false,img:'icons/qrcode.png' ,imganswer:'icons/qrgreen.png' ,  description: "Fresh fish cooked to perfection." },
    //  ];
    

    // wordSlice
     const questions = useSelector((state: RootState) => state.words); 



    const question = questions.find(q => q.id === Number(id));
    



    
    // counterSlice
    const counter = useSelector((state: RootState) => state.counters); 
     const dispatch = useDispatch<AppDispatch>(); 
    const {increment,decrement,reset} = counterSlice.actions


    const checkerHandler=(answer:string)=>{
        if(answer.toLowerCase() == question?.title.toLowerCase()){
            alert(" Correct  ")
            // return setCounter(counter+1)
            dispatch(increment(10))
        }
        else{
            
            alert(' Wrong ')
             dispatch(decrement(10))
            // return setCounter(counter-1)
        }
    }



    if (!question) {
        return <div>Question not found!</div>;
    }



    return (
        <>
        
        <div className='p-5'>
            <h1 className='text-2xl font-bold'>{question.title}</h1>
            <p>{question.description}</p>


            {/* <button onClick={() => window.history.back()} className='mt-4 p-2 bg-blue-500 text-white rounded'>
                Go Back
            </button> */}



            {/* {question.status && <img src={question.imganswer}/>} */}




 <div className="flex my-[100px] flex-col gap-5 items-center  p-4 bg-gray-100 rounded-lg shadow-md">
    <input 
        type="text" 
        value={answer} 
        onChange={(event) => setAnswer(event.target.value)} 
        className="w-[100%] flex-1 text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Type your answer..."
    />
    <button 
        type='submit' 
        onClick={() => checkerHandler(answer)}
        className="px-4 py-2 text-black bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
        Send
    </button>
</div>




        </div>


        <TestPannel/>
        </>
    );
};

export default DetailView;
