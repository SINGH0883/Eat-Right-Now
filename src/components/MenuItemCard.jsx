import React from 'react';

export default function MenuItemCard({ item }) {
  return (
    <div className="glass-panel menu-item-card" style={{ padding: 0 }}>
      <div 
        className="menu-item-image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className="menu-item-content">
        <div className="menu-item-tags">
          {item.tags.map(tag => (
            <span key={tag} className="menu-item-tag">{tag}</span>
          ))}
        </div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
          {item.name}
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', flex: 1 }}>
          {item.description}
        </p>
      </div>
    </div>
  );
}
