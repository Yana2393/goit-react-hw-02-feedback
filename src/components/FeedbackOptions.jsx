import React from 'react';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    
    <div>
      <div>
        {options.map(option => {
          return <button key={option} onClick={() => onLeaveFeedback(option)}
          
            style={{
              marginRight: 12
            }}
            
          >{option}</button>  
        })}
      </div>
    </div>
  );
}