import React, { useState } from 'react';
import Header from './components/Header';
import MenuSection from './components/MenuSection';
import CategoryFilter from './components/CategoryFilter';
import { menuData } from './data/mockFoods';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content" style={{ display: 'block' }}>
        <CategoryFilter 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        {(activeCategory === 'all' || activeCategory === 'starters') && (
          <MenuSection title="Starters" items={menuData.starters} />
        )}
        
        {(activeCategory === 'all' || activeCategory === 'mainCourse') && (
          <MenuSection title="Main Course" items={menuData.mainCourse} />
        )}
        
        {(activeCategory === 'all' || activeCategory === 'desserts') && (
          <MenuSection title="Desserts" items={menuData.desserts} />
        )}
      </main>
    </div>
  );
}

export default App;
