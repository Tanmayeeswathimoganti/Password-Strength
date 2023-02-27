import React from 'react';

const PasswordStregth = ({password}) => {
    let strength = 0;
    let color = 'red';
    let context = "Weak Password";


    if(password) {
        if(/[A-Z]/.test(password)) {
            strength++; 
        }
        if(/[a-z]/.test(password)) {
            strength++; 
        }
        if(/[0-9]/.test(password)) {
            strength++; 
        }
        if(/[@$#&_]/.test(password)) {
            strength++; 
        }
        if(password.length >= 8) {
            strength++; 
        }
    }

    if(strength >= 3 && strength <= 4) {
        color = "orange";
        context = "Moderate Password";
    }else if(strength == 5) {
        color = "green";
        context = "Weak Password";
    }

    return (
        <div 
        className='px-5 py-5'
        style={{
            backgroundColor: color,
        }}
        data-testid="passwordStrengthDiv"
        >
        <h4 
        style={{
            color: "white",
            textAlign: "center"
        }}
        >
        {context}
        </h4>
        </div>
    );
};

export default PasswordStregth;