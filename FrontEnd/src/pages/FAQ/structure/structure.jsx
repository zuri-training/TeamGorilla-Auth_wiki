import { React, useState, useRef, useEffect } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import './structure.css'

export default function Question ({
    Asked,
    Replied,
    className,
}) {
    const [dropDown, setDropDown] = useState(false);
    const contentRef = useRef(null)

    useEffect (() => {
        contentRef.current.style.maxHeight = dropDown 
        ? `${contentRef.current.scrollHeight}px`
        : '0px'
    }, [contentRef, dropDown])

    const toggleAccordion = () => {
        setDropDown(!dropDown)
    }

    return (
        <div className='accordion'>
            <button 
            className={`question-section ${dropDown} ${className}`}
            onClick={toggleAccordion}
            >
              <div>
                <div className='question-align'>
                  <p className='question-style'>{Asked}</p>
                  <span className="">{dropDown ? <FiMinus className='question-icon'/>: <FiPlus className='question-icon'/>}</span>
                </div>
                <div
                  ref={contentRef}
                  className='answer'
                >
                    {Replied}
                    <br />
                    <br />
                </div>
              </div>
            </button>
        </div>
    )
}