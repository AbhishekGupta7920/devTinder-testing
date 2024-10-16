import axios from 'axios';
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import { removeUser } from '../utils/userSlice';



const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user);
  // console.log(user);

  const handleLogout = async ()=>{
    try{
      const res = await axios.post(BASE_URL + "/logout",  {}, {withCredentials : true});
      // console.log(res);
      dispatch(removeUser());
      return navigate("/login");
    }
    catch(err){
      console.log(err.massage);
    }
  }
  return (
    <div>
      <div className="navbar bg-primary-content">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">devTinder</Link>
        </div>
        {user && 
          <div className="flex-none gap-2">
            <div>Welcome, {user.firstName}</div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoUrl} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                  <Link to="/connections">Connections</Link>
                  <Link to="/requests">Requests</Link>
                </li>
                <li><a>Settings</a></li>
                <a onClick={handleLogout}>Logout</a>
              </ul>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default NavBar
