import React from 'react';
import './Container.css';

const Container = ({ amount, goal }) => {
  // Calculate the fill percentage
  const fillPercentage = (amount / goal) * 100;

  // Style for the container
  const containerStyle = {
    backgroundImage: `linear-gradient(to bottom, #3498db ${fillPercentage}%, transparent 0%)`,
  };

  return (
    <div className="container" style={containerStyle}>
      <p className="amount">{amount} ml</p>
    </div>
  );
};

export default Container;