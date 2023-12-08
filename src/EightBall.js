import React, {useState} from "react"
import "./EightBall.css"

const EightBall = ({answers})=>{
    const [cls, setCls] = useState('ready')
    const [answer, setAnswer] = useState('Think of a question')
    const [greenCount, setGreenCount] = useState(0)
    const [redCount, setRedCount] = useState(0)
    const [yellowCount, setYellowCount] = useState(0)

    const getAnswer = ()=>{
        const i = Math.floor(Math.random()*answers.length)
        setCls(answers[i].color)
        setAnswer(answers[i].msg)
        if(answers[i].color ==='green') setGreenCount(greenCount+1)
        if(answers[i].color ==='goldenrod') setYellowCount(yellowCount+1)
        if(answers[i].color ==='red') setRedCount(redCount+1)
    }

    const question = ()=>{
        setCls('ready')
        setAnswer('Think of a question')
    }

    const reset = ()=>{
        setCls('ready')
        setAnswer('Think of a question')
        setGreenCount(0)
        setYellowCount(0)
        setRedCount(0)
    }
    
    return (
        <div className={`EightBall ${cls}`} onClick={()=> cls === 'ready' ? getAnswer() :question()}>
            <span className="EightBall-Answer">
                {answer}
            </span>
            <h4 className="EightBall-gCount"> Green Count: {greenCount}</h4>
            <h4 className="EightBall-yCount"> Yellow Count: {yellowCount}</h4>
            <h4 className="EightBall-rCount"> Red Count: {redCount}</h4>
            <button className="EightBall-Reset" onClick={reset}>Reset</button>
        </div>
    )
}

export default EightBall;