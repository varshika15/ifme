import React, { Component } from 'react';
import './blockquote.css';

class blockquote extends Component {
  render() {
    return (
      <div className="blockquote">      
        
        <blockquote>"It's not just all in your head, it's all around you. We can heal together."</blockquote>
          <blockquote>{"\u2764\uFE0F"}</blockquote>
        
      </div>
    );
  }
}

export default blockquote;
