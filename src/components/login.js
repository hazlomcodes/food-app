import React, { useState, useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';
import '../styles/login.css';

const Facebook = () => {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    console.log(response);
    if (response.status !== 'unknown') {
      setAuth(true);
      setName(response.name);
      setPicture(response.picture.data.url);
    }
  };

  useEffect(() => {
    if (auth) {
      const timer = setTimeout(() => {
        window.location.href = '/home'; 
      }, 3000); 
      return () => clearTimeout(timer); 
    }
  }, [auth]);

  let fbContent;
  if (auth) {
    fbContent = (
      <div
        style={{
          width: '400px',
          margin: 'auto',
          padding: '20px',
          color: '#000',
        }}
      >
        <img className='profilePic' src={picture} alt={name} />
        <h2 className='loginMsg'>Welcome {name}!</h2>
      </div>
    );
  } else {
    fbContent = (
      <FacebookLogin
        appId='784357619748979'
        autoLoad={true}
        fields='name,picture'
        callback={responseFacebook}
        cssClass='btnFacebook'
        textButton='&nbsp;&nbsp;Sign In with Facebook'
      />
    );
  }

  return <div>{fbContent}</div>;
};

export default Facebook;
