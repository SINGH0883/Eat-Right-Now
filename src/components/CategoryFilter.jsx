import React from 'react';

export default function CategoryFilter({ activeCategory, onCategoryChange }) {
  const categories = [
    { id: 'all', label: 'All Menu' },
    { id: 'starters', label: 'Starters' },
    { id: 'mainCourse', label: 'Main Course' },
    { id: 'desserts', label: 'Desserts' }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`btn-primary ${activeCategory === category.id ? 'active' : ''}`}
          style={{
            background: activeCategory === category.id ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.05)',
            border: `1px solid ${activeCategory === category.id ? 'var(--accent-color)' : 'var(--glass-border)'}`,
            color: activeCategory === category.id ? 'white' : 'var(--text-secondary)',
            boxShadow: activeCategory === category.id ? '0 0 15px var(--accent-glow)' : 'none'
          }}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
