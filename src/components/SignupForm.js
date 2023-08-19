import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import  {useNavigate}  from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [accountType, setAccountType] = useState("student");


  function changeHandler(event){
    setFormData( (prevData) => (
        {
            ...prevData, 
            [event.target.name]: event.target.value
        }
    ))
  }

  function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
        toast.error("Passwords do not match");
        return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
        ...formData
    }

    const finalData = {
        ...accountData,
        accountType
    }

    console.log("printing Final account data: ");
    console.log(finalData);

    navigate("/dashboard");
  }

  return (
    <div>
        {/* student Instructor tab */}
        <div
        className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max '>
            <button onClick={ ()=> setAccountType("student")}
            className={`${accountType === "student" 
            ?
            "bg-richblack-900 text-richblack-5":
            "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>
                Student
            </button>
            <button onClick={ ()=> setAccountType("instructor")}
            className={`${accountType === "instructor" 
            ?
            "bg-richblack-900 text-richblack-5":
            "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
        {/* firstName and lastName */}
            <div className='flex gap-x-4 mt-[5px]'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type='text'
                name='firstName'
                onChange={changeHandler}
                placeholder='Enter First Name'
                value={formData.firstName}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>

            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type='text'
                name='lastName'
                onChange={changeHandler}
                placeholder='Enter Last Name'
                value={formData.lastName}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>
            </div>

        {/* email address */}
        <div className='mt-[20px]'>
        <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                <input 
                required
                type="email"
                name='email'
                onChange={changeHandler}
                placeholder='Enter Email Address'
                value={formData.email}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>
        </div>

        {/* createPassword and Confirm Password */}
        <div className='flex gap-x-4 mt-[20px] '>
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                <input
                    required
                    type={showPassword1 ? ("text") : ("password")}
                    name='password'
                    onChange = {changeHandler}
                    placeholder='Enter Password'
                    value = {formData.password}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                ></input>

                <span onClick={ () => setShowPassword1( (prev) => !prev)}
                className='absolute right-3 top-[38px] cursor-pointer'>
                {showPassword1 ? 

                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) 
                : 
                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                
                </span>
            </label>

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    name='confirmPassword'
                    onChange = {changeHandler}
                    placeholder='Confirm Password'
                    value = {formData.confirmPassword}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                ></input>

                <span onClick={ () => setShowPassword( (prev) => !prev)}
                className='absolute right-3 top-[38px] cursor-pointer'>
                {showPassword ? 

                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) 
                : 
                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                
                </span>
            </label>
        </div>

        <button className='text-center bg-yellow-50 rounded-[8px] font-medium text-richblack-900 py-[8px] px-[12px] mt-6 w-full'>Create Account</button>
        </form>
    </div>
  )
}

export default SignupForm