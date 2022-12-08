import { useState } from "react"



const NewsButtons = (props) => {

    const [timeStamp, setTimeStamp] = useState('1m')

    return (
        <div className="pl-5 newsHoverAnimation">
            <div className="py-1">
                <a href={props.link} target="_blank">
                    <p className="text-xs text-medgray">{props.source} ∙ {props.timeStamp}</p>
                    <p>{props.title}</p>
                </a>
            </div>
            
        </div>
    )

}




export default NewsButtons