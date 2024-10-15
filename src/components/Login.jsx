import React, { useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [emailId, setEmailId] = useState("abhi@gmail.com");
    const [password, setPassword] = useState("Abhi@123");
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            const res = await axios.post(
                "http://localhost:7777/login",
                {
                    emailId,
                    password
                },
                {
                    withCredentials: true
                }
            );
            console.log('Login Success:', res.data);
            dispatch(addUser(res.data))
        }
        catch (err) {
            console.log('Login Error:', err);
        }
    };
    // const handleLogin = async () => {
    //     try {
    //         const res = await axios.get(
    //             "http://localhost:7777/users"
    //         )

    //     }
    //     catch (err) {
    //         console.log(err);
    //     }
    // };


    return (
        <div className='flex justify-center my-10'>
            <div className="card bg-base-300 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">login</h2>
                    <div>
                        <label className="form-control w-full max-w-xs py-4">
                            <div className="label">
                                <span className="label-text">email id</span>
                            </div>
                            <input type="text" placeholder={emailId} className="input input-bordered w-full max-w-xs"
                                    onChange={(e)=> setEmailId(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs py-4">
                            <div className="label">
                                <span className="label-text">password id</span>
                            </div>
                        <input type="text" placeholder={password} className="input input-bordered w-full max-w-xs" 
                                   onChange={(e)=> setPassword(e.target.value)}/>
                        </label>
                    </div>
                    <div className="card-actions justify-center m">
                        <button className="btn btn-primary"
                                onClick={handleLogin}>login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
