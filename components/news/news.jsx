import React from 'react'
import NewsButtons from './NewsButtons'

const News = () => {
  return (
    <div className='text-textWhitePrimary hidden lg:inline xl:w-[360px] py-10 space-y-5 ml-8'>
        <div  className='backdrop-brightness-150 rounded-xl h-[550px] xl:w-auto lg:w-auto '>
            <div className='flex flex-col'>
                <div className='m-5'>
                    <p className='font-semibold text-2xl'>What's happening</p>
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