

import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

import loginBg from '../../../image/login-1.jpg';

const Index = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    
    
  
    return (
        <div className='user-login-from mt-5'>
            <div className="r">
                <img src={loginBg} alt="" className="logIn-photo" />
            </div>

            <div className="m-5 mt-5">
                <div className="d-flex justify-content-between singIn">
                    <div className="">
                        <h3>Sign Up</h3>
                    </div>

                    <div className="login-midia">
                        <span className='facebook'>
                            <FontAwesomeIcon icon={faFacebook} />
                        </span>

                        <span className='google'>
                            <FontAwesomeIcon icon={faGoogle} />
                        </span>
                    </div>                    
                </div>

                <div className="mt-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2">
                        <input fastName="fastName" type="text" {...register("fastName", { required: true })} className="user-login-inputfrom"  placeholder='Fast Name'/>
                        {errors.fastName && <span style={{color:"red", fontSize:"12px"}}>Please Enter your Fast Name</span>}
                        </div>
                        <div className="mb-2">
                        <input lastName="lastName" type="text" {...register("lastName", { required: true })} className="user-login-inputfrom"  placeholder='Last Name'/>
                        {errors.lastName && <span style={{color:"red", fontSize:"12px"}}>Please Enter your Last Name</span>}
                        </div>
                        <div className="mb-2">
                        <input phoneNumber="phoneNumber" type="number" {...register("phoneNumber", { required: true })} className="user-login-inputfrom"  placeholder='Mobail Number'/>
                        {errors.phoneNumber && <span style={{color:"red", fontSize:"12px"}}>Please Enter your Phone Number</span>}
                        </div>
                        <div className="mb-2">
                        <input email="email" type="text" {...register("email", { required: true })} className="user-login-inputfrom"  placeholder='Email'/>
                        {errors.email && <span style={{color:"red", fontSize:"12px"}}>Please Enter your email</span>}
                        </div>
                        
                        <div className="mb-2">
                        <input passwoard="passwoard" type="password" {...register("passwoard", { required: true })} className="user-login-inputfrom"   placeholder='Passwoard'/>
                        {errors.passwoard && <span style={{color:"red", fontSize:"12px"}}>Please Enter your Passwoard</span>}
                        </div>
                        
                        <div className="mb-2">
                        <input passwoard="passwoard" type="password" {...register("passwoard", { required: true })} className="user-login-inputfrom"   placeholder='Confirm Passwoard'/>
                        {errors.passwoard && <span style={{color:"red", fontSize:"12px"}}>Please Confirm your Passwoard</span>}
                        </div>
                     
                        
                        <button type="submit" className='user-login-button'>Sign Up</button>
                    </form>
                </div>
                
                <div className="text-center mt-4 pb-5 Not-singUp">
                    <h6>Not a member? <a href="/createAcount">Sing In</a></h6>
                </div>
            </div>

        </div>

    );
};

export default Index;