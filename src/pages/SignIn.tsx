import React from 'react'

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { useForm } from 'react-hook-form';
import useBearStore from '../store/store';

type FormData = {
    username: string;
    password: string;
  };


const SignIn = () => {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const auth = useBearStore((state)=>state.token)
    const navigate = useNavigate();

    const onSubmit = handleSubmit(data => 
        axios
            .post('http://tw-mgt-dev.magicboxsolution.com:8080/pub/rest/en/V1/integration/customer/token',{
                username: data.username ,
                password: data.password
            })
            .then((res)=>{
            useBearStore.setState({token: res.data});
            console.log(auth);
            navigate("/dashboard");
        }))
    return (
        <div style={{backgroundColor:'#cbb38b'}}>
            <div style={{
                display: 'flex',
                padding: '2rem',
                verticalAlign: 'middle',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
                }}> 
                <div style={{
                    backgroundColor: '#ffffff',
                    width: '100%',
                    maxWidth: 550,
                    borderRadius: '1.5rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    }}>
                    <div style={{
                        padding: '1.5rem',
                        }}>
                        <h1 style={{
                            color: '#111827',
                            fontSize: '1.25rem',
                            lineHeight: '1.75rem',
                            fontWeight: '700',
                            letterSpacing: '-0.025em',
                            textAlign: 'center',
                            }}>
                            Sign in to your account
                        </h1>
                        <form onSubmit={onSubmit} style={{margin: '1.25rem',}}>
                            <label style={{
                                display: 'block',
                                marginTop: '0.5rem',
                                marginBottom: '0.5rem',
                                color: '#111827',
                                fontSize: '0.875rem',
                                lineHeight: '1.25rem',
                                fontWeight: '700',
                            }}>
                                Username
                            </label>
                            <input {...register('username',{required: true})} defaultValue='dev@mbs.com' style={{
                                paddingTop: '0.625rem',
                                paddingBottom: '0.625rem',
                                backgroundColor: '#F9FAFB',
                                color: '#111827',
                                width: '100%',
                                borderRadius: '0.5rem',
                                borderWidth: '1px',
                                borderColor: '#D1D5DB',
                            }}/>
                            <label style={{
                                display: 'block',
                                marginTop: '0.5rem',
                                marginBottom: '0.5rem',
                                color: '#111827',
                                fontSize: '0.875rem',
                                lineHeight: '1.25rem',
                                fontWeight: '700',
                            }} >Password</label>
                            <input {...register('password',{required: true ,minLength: 8})} defaultValue='Mbs@1234' type='password' style={{
                                display: 'block',
                                paddingTop: '0.625rem',
                                paddingBottom: '0.625rem',
                                backgroundColor: '#F9FAFB',
                                color: '#111827',
                                width: '100%',
                                borderRadius: '0.5rem',
                                borderWidth: '1px',
                                borderColor: '#D1D5DB',
                            }}/>
                            <button style={{
                                backgroundColor: '#e2d5be',
                                marginTop: '1.5rem',
                                paddingTop: '0.625rem',
                                paddingBottom: '0.625rem',
                                paddingLeft: '1.25rem',
                                paddingRight: '1.25rem',
                                color: '#111827',
                                fontSize: '0.875rem',
                                lineHeight: '1.25rem',
                                fontWeight: '700',
                                textAlign: 'center',
                                width: '100%',
                                borderRadius: '0.5rem',
                            }}
                            >
                                Sign In
                            </button>
                            <button onClick={()=> navigate("/")} style={{
                                    backgroundColor: '#e2d5be',
                                    marginTop: '1.5rem',
                                    paddingTop: '0.625rem',
                                    paddingBottom: '0.625rem',
                                    paddingLeft: '1.25rem',
                                    paddingRight: '1.25rem',
                                    color: '#111827',
                                    fontSize: '0.875rem',
                                    lineHeight: '1.25rem',
                                    fontWeight: '700',
                                    textAlign: 'center',
                                    width: '100%',
                                    borderRadius: '0.5rem',
                                }}
                                >
                                    HOME
                            </button>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default SignIn