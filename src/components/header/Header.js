import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import './Header.css'


const Header = (props) => {
    const resultRef = useRef();

    useEffect(() => {
        resultRef.current.scrollIntoView()
    }, [])

    return (
        <div className='header custom-scroll'>
            <div className='header_history'>
                <p>10+5</p>
                <p>10-5</p>
                <p>10*5</p>
                <p>10+5</p>
                <p>10-5</p>
                <p>10*5</p>
                <p>10+5</p>
                <p>10-5</p>
                <p>10*5</p>
            </div>

            <br />

            <div className='header_expression custom-scroll'>
                <p>{props.expression}</p>
            </div>
            <p ref={resultRef} className='header_result'>{props.result}</p>
        </div>
    );
};

export default Header;