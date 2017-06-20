import React from 'react';
import { withRouter } from 'react-router';


class LoginBox extends React.Component { 
     render() {
       
       const options = {
          email: {
            label: "Email address",
            placeholder: "Email"
          },
          password: {
            label: "Password",
            placeholder: "Password"
          },
          submitButton: {
            text: "Submit"
          }
       };

       return <div>
          <form className="form-signin">
            <div className="form-group">
              <label>{options.email.label}</label>
              <input type="email" className="form-control" placeholder={options.email.placeholder} ref={(input) => this._email = input } />
            </div>
            <div className="form-group">
              <label>{options.password.label}</label>
              <input type="password" className="form-control" placeholder={options.password.placeholder} ref={(input) => this._password = input } />
            </div>
            <button type="submit" onClick={this._handleOnSubmit.bind(this)} className="btn btn-default">{options.submitButton.text}</button>
          </form>
        </div>
     }

     _handleOnSubmit(){
        if(this._email.value === "test@gmail.com" && this._password.value === "test1234"){
           this.props.router.push('/dashboard');
        }
     }
}


export default withRouter(LoginBox);