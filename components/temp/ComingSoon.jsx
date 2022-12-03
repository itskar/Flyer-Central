import React from 'react'

const ComingSoon = ({pageName}) => {
  return (
    <div className="text-textWhitePrimary flex-grow border-l-[1px] border-darkgray
    border-r max-w-[620px] sm:ml-[73px] xl:ml-[400px] divide-y-[1px] divide-darkgray">
     <div className="flex text-2xl justify-center">{pageName} page coming soon...</div>
    </div>
  )
}

export default ComingSoon