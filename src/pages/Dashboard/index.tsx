import React , {useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import useBearStore from '../../store/store';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const auth = useBearStore((state)=>state.token)
    const [userData, setUserData] = useState({firstname:'loading ...',lastname:'loading ...',email:'loading ...'})

    useEffect(() => {
        axios
            .get('http://tw-mgt-dev.magicboxsolution.com:8080/pub/rest/en/V1/customers/me',{
                headers: {
                  'Authorization': `Bearer ${auth}`
                }})
            .then((res) => setUserData(res.data))
    }, [])
    
    return (
        <div className='container'>
                <div className='flexbox'> 
                    <div className='contentbox'> 
                        <div className='content'>
                            <h1> Dashboard Page </h1>
                            <h2> Token: {auth} </h2>
                            <h2> User Firstname: {userData ? userData.firstname : 'loading ...'} </h2>
                            <h2> User Lastname: {userData ? userData.lastname : 'loading ...'} </h2>
                            <h2> User Email: {userData ? userData.email : 'loading ...'} </h2>
                            <button onClick={()=> navigate("/auth/signin")}> 
                                SIGN IN &lt;Unable to access if authurized&gt; 
                            </button>
                            <button onClick={()=> navigate("/")}> 
                                HOME 
                            </button>
                            <button onClick={()=> { 
                                useBearStore.setState({token: ''}) 
                                navigate("/auth/signin")
                                    }}>
                                LOGOUT
                            </button>                            
                        </div>
                    </div>
                </div> 
            </div>
    )
}

export default Dashboard