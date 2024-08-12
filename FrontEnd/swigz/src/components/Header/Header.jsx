import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>get your customizable food diet for better health.</h2>
        <p>we are providing customizable diet food on subscription basis according to your health check.</p>
        <button onClick={() => navigate('/nutriform')}>subscribe</button>
      </div>
    </div>
  );
}