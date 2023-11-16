import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import './Buttons.css'

const PrimaryBtn = ({ btnType, btnText, btnIcon }) => {
    return (
        <button className={`group syner-button ${btnType || 'syner-outline'}`}>
            <span className="circle" aria-hidden="true">
                <span className='transition-all btn-icon'>
                    {btnIcon || <FaCartPlus className='w-5 h-5' />}
                </span>
            </span>
            <span className="button-text">{btnText || 'add to cart'}</span>
        </button>
    );
};

export default PrimaryBtn;