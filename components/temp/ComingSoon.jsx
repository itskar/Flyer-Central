import React from 'react'

const ComingSoon = ({pageName}) => {
  return (
    <div className="hidden sm:inline flex-grow border-l-[1px] border-darkgray border-r border-darkgray max-w-2xl sm:ml-[354px] xl:ml-[600px] divide-y-[1px] divide-darkgray">
     <div className=" text-white text-2xl mt-72 ml-48">{pageName} page coming soon...</div>
    </div>
  )
}

export default ComingSoon