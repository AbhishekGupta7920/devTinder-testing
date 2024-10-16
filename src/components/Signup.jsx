import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSingup = async () => {
        try {
            const res = await axios.post(
                "http://localhost:7777/signup",
                {
                    firstName,
                    lastName,
                    emailId,
                    password
                },
                {
                    withCredentials: true
                }
            );
            console.log('Signup Success:', res.data);
            dispatch(addUser(res.data));
            navigate("/");
        }
        catch (err) {
            // console.log('Login Error:', err);
            setError(err?.response?.data  || "something went wrong")
        }
    };


    return (
        <div className='flex justify-center my-10'>
            <div className="card bg-base-300 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">Signup</h2>
                    <div>
                        <label className="form-control w-full max-w-xs py-4">
                            <div className="label">
                                <span className="label-text">First Name</span>
                            </div>
                            <input type="text" placeholder="" className="input input-bordered w-full max-w-xs"
                                    onChange={(e)=> setFirstName(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs py-4">
                            <div className="label">
                                <span className="label-text">Last Name</span>
                            </div>
                            <input type="text" placeholder={emailId} className="input input-bordered w-full max-w-xs"
                                    onChange={(e)=> setLastName(e.target.value)} />
                        </label>
                    </div>
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
                                onClick={handleSingup}>SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Signup
