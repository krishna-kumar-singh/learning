import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getAccountUser()
                localStorage.setItem("token",JSON.stringify(userData))
                if(userData){
                     dispatch(authLogin({userData}))
                }
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className="flex items-center justify-center h-screen pb-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold">Sign in to your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
            Don't have any account?{' '}
            <Link to="/signup" className="font-medium text-primary hover:underline">
                Sign Up
            </Link>
        </p>
        {error && <p className="text-red-600 mt-4 text-sm text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-6">
            <Input
                label="Email"
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                    },
                })}
            />
            <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
            />
            <Button type="submit" className="mt-6 w-full">
                Sign in
            </Button>
        </form>
    </div>
</div>


  )
}

export default Login