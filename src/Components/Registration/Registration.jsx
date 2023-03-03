import React, { useContext } from 'react';
import { MyContext } from '../../Context';
import '../Registration/Registration.css';
import { FaEye } from "react-icons/fa";

export default function Registration() {

    const regVal = useContext(MyContext);

    return (
        <div className='regisration'>
            <h1 className='reg-title'>Login Form</h1>

            <form className='form' onSubmit={(e) => regVal.formFunc(e)}>
                <input className='input' type="text" value={regVal.login} placeholder="Enter you'r login" onChange={(e) => regVal.changeLogin(e)} />
                <input className='input' type="email" value={regVal.email} placeholder="Enter you'r email" onChange={(e) => regVal.changeEmail(e)} />
                <div className='password-inp'>
                    <input className='input' type={regVal.eyeBool ? "text" : "password"} value={regVal.password} placeholder="Enter you'r password" onChange={(e) => regVal.changePassword(e)} />
                    <FaEye className='eye' onClick={() => { regVal.changePasswordProperty() }} />
                </div>
                <button className='add-item'>Log In</button>
            </form>
        </div>
    )
}
