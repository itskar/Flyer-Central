import React from 'react'

const ComingSoon = ({pageName}) => {
  return (
    <div className="text-textWhitePrimary flex-grow border-l-[1px] border-darkgray
    border-r border-darkgray max-w-2xl sm:ml-[98px] lg:ml-[258px] xl:ml-[600px] divide-y-[1px] divide-darkgray">
     <div className="text-2xl mt-72 ml-48">{pageName} page coming soon...</div>
    </div>
  )
}

export default ComingSoon