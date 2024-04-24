import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index.js';

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        setError('');
        try {
            const userData = await authService.createAccount(data);

            if (userData) {
                const userData = await authService.getAccountUser();
                if (userData) dispatch(login({ userData }));
                navigate('/');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen pb-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">Sign up to create an account</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-primary hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
                {error && <p className="text-red-600 mt-4 text-sm text-center">{error}</p>}
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                        {...register('name', { required: true })}
                    />
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        {...register('email', { required: true })}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register('password', { required: true })}
                    />
                    <Button type="submit" className="mt-6 w-full">
                        Create Account
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
