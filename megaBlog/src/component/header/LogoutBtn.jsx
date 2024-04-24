import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';

function LogoutBtn() {
  const navigate=useNavigate()
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(
            () => {
                dispatch(logout());
            }
        );
        navigate("/")
        
    };

    return (
        <button onClick={logoutHandler} className='inline-block px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-medium focus:outline-none focus:ring focus:ring-blue-500'>
            Logout
        </button>
    );
}

export default LogoutBtn;
