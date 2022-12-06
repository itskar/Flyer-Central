import {useState, useEffect, use} from 'react'
import NewsButtons from './NewsButtons'


function News({data}){

  console.log(data)

  return (
    <div className='text-textWhitePrimary hidden lg:inline xl:w-[360px] py-10 space-y-5 ml-8'>
        <div  className='backdrop-brightness-150 rounded-xl h-[550px] xl:w-auto lg:w-auto '>
            <div className='flex flex-col'>
                <div className='m-5'>
                    <p className='font-semibold text-2xl'>What's happening</p>
                </div>
                {data.map((article) => (<NewsButtons link={article.url} source={article.author} title={article.title} timeStamp={(article.publishedAt).slice(0,10)} />))}
            </div>
            
        </div>
        
    </div>
  )
}

export default News;