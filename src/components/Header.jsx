import React from 'react';

export default function Header() {
  return (
    <header style={{ padding: '2rem 0', textAlign: 'center' }}>
      <div className="animate-float" style={{ display: 'inline-block' }}>
        <h1 style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '3rem' }}>🍽️</span> 
          Eat Right Now
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '0.5rem' }}>
          Your real-time food suggestion platform
        </p>
      </div>
    </header>
  );
}
