import React, { useState, useContext } from 'react';
import FacebookLogin from 'react-facebook-login';
import '../styles/login.css';
import { AuthContext } from '../context/AuthProvider';

const Facebook = () => {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');

  const { setFBdata, FBdata } = useContext(AuthContext);
  console.log(FBdata);

  const responseFacebook = (response) => {
    console.log(response);
    if (response.status !== 'unknown') {
      setAuth(true);
      setName(response.name);
      setPicture(response.picture.data.url);
      setFBdata(response); // update the context with the response object
    }
  };

  // useEffect(() => {
  //   if (auth) {
  //     const timer = setTimeout(() => {
  //       window.location.href = '/home';
  //     }, 3000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [auth]);

  let fbContent;
  if (auth) {
    fbContent = (
      <div
        style={{
          width: '400px',
          margin: 'auto',
          padding: '20px',
          color: '#000'
        }}>
        <img className="profilePic" src={picture} alt={name} />
        <h2 className="loginMsg">Welcome to Do-Nation {name}!</h2>
      </div>
    );
  } else {
    fbContent = (
      <FacebookLogin
        appId="1542594726233782"
        fields="name,picture"
        callback={responseFacebook}
        cssClass="btnFacebook"
        textButton="&nbsp;&nbsp;Sign In with Facebook"
      />
    );
  }

  return <div>{fbContent}</div>;
};

export default Facebook;
