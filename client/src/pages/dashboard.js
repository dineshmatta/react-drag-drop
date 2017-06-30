import React from 'react';
import Dashboard from '../components/dashboard'

export default class DashboardPage extends React.Component {
  render() {
    return (
      <div>
        <div className="cell">
          <article className="article">
            <h1 className="article-title">Profile Dashboard > Drag profiles between List 1 and List 2</h1>
            <div className="article-body">
              <Dashboard />
            </div>
          </article>
        </div>
        
      </div>
    )
  }
}
