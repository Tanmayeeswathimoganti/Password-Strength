import React, { useState } from 'react';
import PasswordStregth from './PasswordStrength';

const PasswordChecker = () => {
    const [passwordIn, setPasswordIn] = useState("");
    const [inputType, setInputType] = useState("password");

    const handlePassworChange = (e) => {
        setPasswordIn(e.target.value);
    };

    const handleShowPassword = () => {
        if(inputType === 'password') {
            setInputType("text");
        }else {
            setInputType("password");
        }
    };

    return (
        <div className='layout-column align-items-center justify-content'>
        <div className='card w-50 px-75 py-30'>
        <form onSubmit={(e) => e.preventDefault()}>
        <h2>Enter Your Password</h2>
        <div className='layout-column mb-10'>
        <input 
        type={inputType}
        id="name"
        placeholder='Enter Password'
        data-testid="passwordInput"
        value={passwordIn}
        onChange={handlePassworChange}
        />
        </div>
        </form>
        <div className='py-10' data-testid="buttonDiv">
        <button onClick={handleShowPassword}>
        {inputType === "password" ? "Show Password" : "Hide Password"}
        </button>
        <button onClick={() => setPasswordIn("")}>
        Clear Password
        </button>
        </div>
        </div>

        <div className='w-50 py-20'>
        <PasswordStregth password={passwordIn} />
        </div>
        </div>
    );
};

export default PasswordChecker;