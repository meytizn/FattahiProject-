'use client'; 
import Link from 'next/link';
import React, { Suspense } from 'react'; // Import Suspense
import { useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation'; // Import the hook
import { RootState } from '@/redux/store'; // Adjust the path accordingly
import TestPannel from './TestPannel';

const Page = () => {
    const questions = useSelector((state: RootState) => state.words); 

    // Pagination  
    const searchParams = useSearchParams(); // Get searchParams using the hook in CSR
    const ppg = 6;
    const currentpage = parseInt(searchParams.get('page') || '1'); // Get page from searchParams
    const firstIndex = (currentpage - 1) * ppg;
    const endIndex = firstIndex + ppg;

    const questionPagination = questions.slice(firstIndex, endIndex);

    return (
        <>
        <div className='flex flex-row justify-around gap-y-2 flex-wrap p-3 md:max-h-[60vh] max-h-[60vh] overflow-y-auto'>
            {questionPagination.map((item) => (
                <div className='sticky w-[35%] md:w-[30%] h-[200px] flex flex-col justify-center items-center content-center' key={item.id}>
                    <Link href={`/tests/${item.id}`}>
                        <img src='/icons/qrcode.png' className='w-[150px]' />
                    </Link> 
                    
                    {/* Circle div with shadow */}
                    <div className='absolute bottom-[37%] left-1/2 transform -translate-x-1/2 w-[40px] h-[40px] bg-white border-5 text-[#030162] rounded-full shadow-lg flex items-center justify-center'>
                        <span className='text-[20px] text-[#030162]'>{item.id}</span>
                    </div>
                </div>
            ))}
        </div>
            
        <div className='fixed bottom-20 flex flex-row justify-evenly w-[100%] text-white justify-between'>
            <Link className='btn w-[30%] p-3 text-white text-center bg-white rounded-b-md' href={`?page=${currentpage + 1}`}>Next</Link>
            <Link className='btn w-[30%] p-3 text-white text-center bg-white rounded-b-md' href={`?page=${currentpage - 1}`}>Previous</Link>
        </div>
        
        <TestPannel/>
        </>
    );
};

// Wrap the Page component in Suspense
const WrappedPage = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Page />
    </Suspense>
);

export default WrappedPage;
