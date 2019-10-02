import React from 'react';
import './App.css';
import PasswordSafe from './passwordSave';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    password: '',
    bold: false
    };
  }

  handlePassword = (newPw) => {
    this.setState(oldState => ({
      password: newPw,
      bold: !oldState.bold
    })); 
  }
  
  render(){
    return (
      <div>
     <PasswordSafe password={this.state.password} onEnter={this.handlePassword} bold={this.state.bold}/>
      
     <p>
            I have developed a reusable component where in if a user enters his/her password, he can opt to mask it or leave the
            text as is. Having several social media accounts that I log in in public and private, I think it is extremely important
            for the user to have the choice to see the password text or mask it. Therefore I have created this component so that users
            can keep their password safe from the eye of the public.
            The bold functionality on enter is useful while using social media on mobile. Text can sometimes be too small to see, thus
            giving the users the option to bold the text onenter will help them better see their own password on small devices. </p>

           <p> Developers can use this component when they create an app that requires sign in or sign up. All sign ins or sign ups
            require the user to input a password and by using the component that I created, developers will be easily able to add
            the functionality of masking the password to save the password from public or to bolden it so that the user can more clearly
            see it. 
            </p>
            <p>
              I named my component PasswordSafe because it actively helps the user keep their password safe from the eyes of
              the public when they are logging into the devices in a public setting.  
              One of the props was named password as the core functionality of the component revolves around entering the password and Having
              the option to keep it safe. Secondly the prop is named onEnter because the bold functionality is called upon when enter is pressed.
            </p>
      </div>
    );
  }
}

 
