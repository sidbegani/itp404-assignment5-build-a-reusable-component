import React from 'react';
import PropTypes from 'prop-types';

const ENTER_KEY = 13;

    export default class PasswordSafe extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                currentPassword: props.value,
                encryptionMode: false
            };
        }
    
        changeEncryption = () => {
            this.setState(oldState => ({encryptionMode: !oldState.encryptionMode}))
        }
    
        handleChange = (event) => {
            this.setState({
                currentPassword: event.target.value
            });
        }

        handleKeyUp = (event) =>{
            const { keyCode } = event;
    
            if (keyCode === ENTER_KEY){
                this.props.onEnter(this.state.currentPassword);
            }
        }

        render(){
        return(
            <div>
            <button name = "passwordButton" onClick ={this.changeEncryption}>PassWord Button </button>
            <input 
            type = {this.state.encryptionMode ? "password" : "text"}
            value={this.state.currentPassword} 
            style={{fontWeight: this.props.bold ? "bold" : "initial"}}
            onKeyUp={this.handleKeyUp}
            />
            </div>
        )
    }
}

PasswordSafe.propTypes = {
    password: PropTypes.string,
    onEnter: PropTypes.func.isRequired
};
