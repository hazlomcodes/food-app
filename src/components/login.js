import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import '../styles/login.css'

export default class Facebook extends Component {

    state = {
        auth: false,
        name: '',
        picture: ''
    };

    responseFacebook = response => {
        console.log(response);
        if(response.status !== 'unknown')
        this.setState({
            auth: true,
            name: response.name,
            picture: response.picture.data.url
        });

    }
    render(){
        let fbContent;

        this.state.auth ?
            fbContent = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    padding: '20px',
                    color: '#000'
                }}>
                    <img className='profilePic' src={this.state.picture} alt={this.state.name} />
                    <h2 className='loginMsg'>Welcome {this.state.name}!</h2>
                    
                </div>
            ) : 
            fbContent = (<FacebookLogin
                appId="1542594726233782"
                autoLoad={true}
                fields="name,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} 
                cssClass="btnFacebook"
                textButton = "&nbsp;&nbsp;Sign In with Facebook"                                                                
                />);

        return (
            <div>
                {fbContent}
            </div>
        );

        
    }
}