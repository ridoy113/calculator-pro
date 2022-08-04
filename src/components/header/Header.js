import React from 'react';
import './Header.css'


const Header = () => {
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
                <p>10+11+2</p>
            </div>
            <p className='header_result'>23</p>
        </div>
    );
};

export default Header;