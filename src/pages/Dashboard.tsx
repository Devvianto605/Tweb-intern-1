import React , {useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import useBearStore from '../store/store';
import axios from 'axios';

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
                                Dashboard Page
                            </h1>
                            <h2 style={{
                                color: '#111827',
                                fontSize: '1rem',
                                lineHeight: '1.75rem',
                                fontWeight: '700',
                                letterSpacing: '-0.025em',
                                textAlign: 'center',
                                }}>
                                Token: {auth}
                            </h2>
                            <h2 style={{
                                color: '#111827',
                                fontSize: '1rem',
                                lineHeight: '1.75rem',
                                fontWeight: '700',
                                letterSpacing: '-0.025em',
                                textAlign: 'center',
                                }}>
                                User Firstname: {userData ? userData.firstname : 'loading ...'}
                            </h2>
                            <h2 style={{
                                color: '#111827',
                                fontSize: '1rem',
                                lineHeight: '1.75rem',
                                fontWeight: '700',
                                letterSpacing: '-0.025em',
                                textAlign: 'center',
                                }}>
                                User Lastname: {userData ? userData.lastname : 'loading ...'}
                            </h2>
                            <h2 style={{
                                color: '#111827',
                                fontSize: '1rem',
                                lineHeight: '1.75rem',
                                fontWeight: '700',
                                letterSpacing: '-0.025em',
                                textAlign: 'center',
                                }}>
                                User Email: {userData ? userData.email : 'loading ...'}
                            </h2>
                            <div>
                            <button onClick={()=> navigate("/auth/signin")} style={{
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
                                    SIGN IN &lt;Unable to access if authurized&gt;
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
                            <button onClick={()=> {
                                    useBearStore.setState({token: ''})
                                    navigate("/auth/signin")
                                    }}
                                    style={{
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
                                LOGOUT
                            </button>
                            </div>
                            
                        </div>
                    </div>
                </div> 
            </div>
    )
}

export default Dashboard