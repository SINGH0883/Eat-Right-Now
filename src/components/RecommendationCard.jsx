import React from 'react';

export default function RecommendationCard({ recommendation, isLoading }) {
  if (isLoading) {
    return (
      <div className="glass-panel" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
        <div className="animate-pulse-glow" style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'var(--accent-color)',
          animation: 'pulse-glow 1.5s infinite'
        }} />
      </div>
    );
  }

  if (!recommendation) {
    return (
      <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '400px', textAlign: 'center' }}>
        <span style={{ fontSize: '4rem', marginBottom: '1rem' }}>🍽️</span>
        <h3 style={{ color: 'var(--text-secondary)' }}>Select your conditions and find your perfect meal!</h3>
      </div>
    );
  }

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '0', overflow: 'hidden' }}>
      <div 
        style={{
          width: '100%',
          height: '250px',
          backgroundImage: `url(${recommendation.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottom: '1px solid var(--glass-border)'
        }}
      />
      <div style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          {recommendation.tags.map(tag => (
            <span 
              key={tag}
              style={{
                background: 'rgba(255, 42, 95, 0.2)',
                color: 'var(--accent-color)',
                padding: '0.25rem 0.75rem',
                borderRadius: '100px',
                fontSize: '0.875rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
          {recommendation.name}
        </h2>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
          {recommendation.description}
        </p>

        <a 
          href={`https://www.google.com/search?q=${encodeURIComponent(recommendation.name + ' near me')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}
        >
          Find Near Me
        </a>
      </div>
    </div>
  );
}
