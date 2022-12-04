import React from 'react'
import NewsButtons from './NewsButtons'

const News = () => {
  return (
    <div className='text-textWhitePrimary hidden lg:inline xl:w-[360px] py-10 space-y-5 ml-10'>
        <div  className='backdrop-brightness-125 rounded-xl h-[550px] xl:w-[23vw] lg:w-[23vw] '>
            <div className='flex flex-col'>
                <div className='m-5'>
                    <p className='font-bold text-2xl'>What's happening</p>
                </div>
                <NewsButtons />
                <NewsButtons />
                <NewsButtons />
                <NewsButtons />
            </div>
            
        </div>
        
    </div>
  )
}

export default News