import React from 'react';
import LoginComponent from '../Components/LoginComponent';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Is } from '@flk/supportive-is';
import { ReactorComponent } from '../../../core/ReactorComponent';
import { AdminTheme } from '../../../shared/Constants/theme';

const theme = AdminTheme;

class LoginPage extends ReactorComponent {

    submitLoginForm = e => {
        e.preventDefault();
        let form = new FormData(e.target);
        console.log(form.get('email'), form.get('password'), form.get('remember'));
    } 

    validateEmail = e => {
        let val = e.target.value;
        if (Is.empty(val)) {
            this.set('validate.email', 'email is required');
        }else {
            this.set('validate.email', null);
        }
    }

    validatePassword = e => {
        let val = e.target.value;
        if (Is.empty(val)) {
            this.set('validate.password', 'password is required');
        }else {
            this.set('validate.password', null)
        }
    }

    render () {
        return ( 
            <MuiThemeProvider theme={theme}>
                <LoginComponent state={this.state} validateEmail={this.validateEmail} validatePassword={this.validatePassword} submitLoginForm={this.submitLoginForm} />
            </MuiThemeProvider>
         );
    }
}


export default LoginPage;