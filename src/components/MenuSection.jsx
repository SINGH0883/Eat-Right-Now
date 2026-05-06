import React from 'react';
import MenuItemCard from './MenuItemCard';

export default function MenuSection({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="menu-section animate-fade-in">
      <h2 className="menu-section-title">{title}</h2>
      <div className="menu-grid">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
