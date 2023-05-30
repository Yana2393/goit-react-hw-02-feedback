import React from 'react';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101',
          marginBottom: 20,
          width: '100%',
        }}
      >
        {options.map(option => {
          return (
            <button
              style={{
                backgroundColor: 'white',
                color: '#010101',
                padding: 10,
                borderRadius: 10,
                margin: 10,
                width: '100%',
                cursor: 'pointer',
                textTransform: 'uppercase',
                border: 'none',
              }}
              key={option}
              onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
