// pages/test/[id]/page.tsx
'use client'; // This directive ensures the component is a Client Component
import React, { useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import { AppDispatch, RootState } from '@/redux/store'; // Adjust the path accordingly
import { useDispatch, useSelector } from 'react-redux';
import counterSlice from '@/redux/counterSlice';
import TestPannel from '../TestPannel';
import { wordInterfaceSlice } from '@/redux/wordSlice';
import Link from 'next/link';
import QrButton from '../QrButton';

const DetailView = () => {
    const { id } = useParams(); // Get the dynamic route parameter
    const [answer, setAnswer] = useState("");
    const [message, setMessage] = useState("");
    const [hint, setHint] = useState(false);
    
    

    // voiceplayer
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const playAudio = (src: string) => {
        if (audioRef.current) {
            audioRef.current.src = src; // Set the audio source dynamically
            audioRef.current.play().catch((error) => {
                console.error("Audio playback failed:", error);
            });
        }
    };

    // wordSlice
    const questions = useSelector((state: RootState) => state.words);

    const question = questions.find(q => q.id === Number(id));

    const [imgShower, setImgShower] = useState(false);
    // counterSlice
    const counter = useSelector((state: RootState) => state.counters);
    const dispatch = useDispatch<AppDispatch>();
    const { increment, decrement } = counterSlice.actions;

    const checkerHandler = (answer: string) => {
        
        if (answer!=="") {
            

        setImgShower(true)
        if (answer.toLowerCase() === question?.title.toLowerCase()) {
            // alert("Correct");
            playAudio("/audios/correct.mp3"); // Play correct answer audio
            
            setMessage(`${answer} is correct`)
            dispatch(increment(10));
        } else {
            // alert('Wrong');
            playAudio("/audios/wrong.wav"); // Play wrong answer audio
            setMessage(`wrong answer! the answer is ${question?.title}`);
            dispatch(decrement(10));
        }


        }

    };





    if (!question) {
        return <div>Question not found!</div>;
    }

    return (
        <>

            <div className='md:mt-10 flex flex-col md:flex-row md:w-[90%] m-auto justify-start md:p-3 md:gap-x-15 mb-[500px]  '>
                
                
                
                <div className='flex md:w-[30%] gap-5 md:gap-10 flex-col md:rounded-md justify-center items-center p-5 border-2 '>
                
                {imgShower ? (<img className='w-[200px] md:w-[200px] pt-3' src={question.imganswer }/>)
                :(<QrButton/>)}
                



                {/* <h1 className='text-2xl font-bold'>{question.title}</h1> */}

                



                <div className='w-full flex flex-row flex-wrap justify-center content-center 
                items-center align-center justify-items-center text-center '>

                <p className='  flex flex-row text-2xl font-bold w-[50%] p-3'>Card :  {question.id}</p>


                 <button className=' w-[30%]' onClick={()=>playAudio(question.sound)}>
                    <img className='w-[50px] m-auto ' src='/icons/soundwhite.png' />
                 </button>

                                 {hint && 
                <h3 className='w-[100%] pt-8 text-lg text-yellow-300 text-[22px]'>{question.description}</h3> }
</div>


                    </div>





                <div className="md:w-[30%]   flex md:my-[0px] flex-col gap-5 items-center p-4 bg-gray-100 md:rounded-md shadow-md">
                   
                   <p className='text-black text-[20px]'>{message}</p>
                   
                    <input 
                        type="text" 
                        value={answer} 
                        onChange={(event) => setAnswer(event.target.value.trim())} 
                        className="w-[100%] text-lg text-center flex-1 text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Type your answer..."
                    />






<div className='flex flex-row justify-around  w-full'>



                    <button 
                        type='submit' 
                         disabled={message !== ""} // Button is disabled if there is a message
                        onClick={() => setHint(!hint)}
                        className={`px-4 py-2 text-white rounded-md
                            ${message !== "" ? 'bg-gray-400 cursor-not-allowed hidden' : ' cursor '} 
                            focus:outline-none  focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer `}
                    >
                        <img className='w-[50px]' src='/icons/eyeblack.png'/>
                    </button>




                    <button 
                        type='submit' 
                         disabled={message !== ""} // Button is disabled if there is a message
                        onClick={() => checkerHandler(answer)}
                        className={`px-4 py-2 text-white rounded-md w-[30%]
                            ${message !== "" ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} 
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                    >
                        check
                    </button>










                    <button 
                        type='submit' 
                         disabled={message !== ""} // Button is disabled if there is a message
                        onClick={() => checkerHandler(answer)}
                        className={`px-4 py-2 text-white rounded-md w-[30%]
                            ${message !== ""  ? 'bg-green-600 text-white ':'bg-gray-400 cursor-not-allowed'} 
                            focus:outline-none `}
                    >
                        <Link className='text-white' href={`/tests/${question.id < questions.length ? question.id + 1 : 1}`}> 
                        continue</Link>
                    </button>




</div>


                </div>




            </div>

            {/* Audio Element */}
            <audio ref={audioRef} preload="auto" />
            <TestPannel />
        </>
    );
};

export default DetailView;
