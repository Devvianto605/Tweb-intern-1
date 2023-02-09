import React from 'react';
import useBearStore from '../../store/store';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const auth = useBearStore((state)=>state.token)
  return (
    <div className='container'>
            <div className='flexbox'> 
                <div className='contentbox'>
                    <div className='content'>
                        <h1> Home Page </h1>
                        <h2> {auth ? 'Authorized' : 'unauthorized'} </h2>
                        <h2> {auth ? `Token: ${auth}` : ''} </h2>
                          <button onClick={()=> navigate("/auth/signin")}>
                              SIGN IN &lt;Unable to access if authurized&gt;
                          </button>
                          <button onClick={()=> navigate("/dashboard")}>
                              DASHBOARD  &lt;Unable to access if NOT authurized&gt;
                          </button>                        
                    </div>
                </div>
            </div> 
        </div>
  )
}

export default Home