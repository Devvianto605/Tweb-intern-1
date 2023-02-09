import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import useBearStore from '../../../store/store';
import * as yup from "yup";
import './SignIn.css'

type FormData = {
    email: string;
    password: string;
};

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
});

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: yupResolver(schema) });
    const auth = useBearStore((state) => state.token)
    const navigate = useNavigate();
    const [err, setErr] = useState()


    const onSubmit = handleSubmit(data =>
        axios
            .post('http://tw-mgt-dev.magicboxsolution.com:8080/pub/rest/en/V1/integration/customer/token', {
                username: data.email,
                password: data.password
            })
            .then((res) => {
                useBearStore.setState({ token: res.data });
                console.log(auth);
                navigate("/dashboard");
            })
            .catch((error) => setErr(error.message))
    )
    return (
        <div className='container'>
            <div className='flexbox'>
                <div className='contentbox'>
                    <div className='content'>
                        <h1>Sign in to your account</h1>
                        <form onSubmit={onSubmit}>
                            <label> Email: </label>
                            <input {...register('email', { required: true })} defaultValue='dev@mbs.com' />
                            <p> {errors.email?.message} </p>
                            <label> Password: </label>
                            <input {...register('password', { required: true, minLength: 8 })} defaultValue='Mbs@1234' type='password' />
                            <p> {errors.password?.message} </p>
                            {err && <p> {err} </p>}
                            <button> Sign In </button>
                            <button onClick={() => navigate("/")}>
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