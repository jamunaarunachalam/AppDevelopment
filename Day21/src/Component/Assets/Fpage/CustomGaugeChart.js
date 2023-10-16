import React, { useEffect, useRef } from 'react';

const CustomGaugeChart = ({ amount, goal }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate the current gauge value based on the amount and goal
    const gaugeValue = (amount / goal) * 100;

    // Set the radius and center coordinates for the gauge
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;

    // Draw the gauge background (e.g., a circle)
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#ccc';
    ctx.stroke();

    // Draw the filled part of the gauge
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, (gaugeValue / 100) * 2 * Math.PI - Math.PI / 2);
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'blue';
    ctx.stroke();

    // Display a text message when the goal is achieved
    if (amount >= goal) {
      ctx.font = '20px Arial';
      ctx.fillStyle = 'green';
      ctx.fillText('Goal Achieved!', centerX - 60, centerY + 10);
    }
  }, [amount, goal]);

  return <canvas ref={canvasRef} width={200} height={200} />;
};

export default CustomGaugeChart;