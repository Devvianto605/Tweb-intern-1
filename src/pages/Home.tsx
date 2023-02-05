import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
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
                            Home Page
                        </h1>
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
                          <button onClick={()=> navigate("/dashboard")} style={{
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
                              DASHBOARD  &lt;Unable to access if NOT authurized&gt;
                          </button>
                        </div>
                        
                    </div>
                </div>
            </div> 
        </div>
  )
}

export default Home