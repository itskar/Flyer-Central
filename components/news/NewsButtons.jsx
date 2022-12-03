import { useState } from "react"



const NewsButtons = (props) => {

    const [timeStamp, setTimeStamp] = useState('1m')

    return (
        <div className="pl-5 newsHoverAnimation">
            <div className="py-1">
                <p className="text-xs text-medgray">NCAA Football ∙ {timeStamp}</p>
                <p className="text-lg pt-1">Utah at USC</p>
            </div>
            
        </div>
    )

}




export default NewsButtons