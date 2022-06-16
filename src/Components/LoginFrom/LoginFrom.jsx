import React from 'react';
import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

import './LoginFrom.css';
import loginBg from '../../image/login-1.jpg'
import { Link } from 'react-router-dom';


const LoginFrom = () => {

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
                        <h3>Sign In</h3>
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
                        <input email="email" {...register("email", { required: true })} className="user-login-inputfrom"  placeholder='Email'/>
                        {errors.email && <span style={{color:"red", fontSize:"12px"}}>Please Enter your email</span>}
                        </div>
                        
                        <div className="mb-2">
                        <input passwoard="passwoard" type="password" {...register("passwoard", { required: true })} className="user-login-inputfrom"   placeholder='Passwoard'/>
                        {errors.passwoard && <span style={{color:"red", fontSize:"12px"}}>Please Enter your email</span>}
                        </div>
                     
                        
                        <button type="submit" className='user-login-button'>Sing In</button>
                    </form>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="user-remember">                        
                        <input className="form-check-input user-remember-input" type="checkbox" value="" aria-label="Checkbox for following text input" placeholder='Remaeasd'/>
                        <label className=''>Remember Me</label>
                    </div>
                    
                    <div className="forgot-pasword">
                        <h6>Forgot Password</h6>
                    </div>
                </div>
                
                <div className="text-center mt-4 pb-5 Not-singUp">
                    <h6>Not a member? <Link as={Link} to="/createAcount" className="">Sign Up</Link></h6>
                </div>
            </div>

        </div>






    );
};

export default LoginFrom;