import React from 'react';
import LoginBox from '../components/login-box';

export default class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <div className="cell">
          <article className="article">
            <h1 className="article-title">Profile Listing App</h1>
            <div className="article-body">
              <LoginBox/>
            </div>
          </article>
        </div>
        
      </div>
    )
  }
}
