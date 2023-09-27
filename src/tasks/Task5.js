import React, { useState } from 'react';

export default function Task5() {
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(null);

    const calculateAge = () => {
        const birthdateInput = new Date(birthdate);
        const today = new Date();
        const age = today.getFullYear() - birthdateInput.getFullYear();
        setAge(age);
      };      

    return (
        <>
            <a href="./"><h1 className='mx-3 my-3'>Index</h1></a>
            <div className='task5'>
                <center>
                    <h1>Age Calculator</h1>
                    <h5 className='my-3'>Enter your date of birth</h5>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="date"
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                            style={{ width: "20%" }}
                        /> <br />
                        <button onClick={calculateAge} className='btn btn-primary mb-3'>Calculate Age</button>
                    </form>
                    {age !== null && <h2>You are {age} years old</h2>}
                </center>
            </div>
        </>
    );
}
