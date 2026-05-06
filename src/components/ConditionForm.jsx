import React from 'react';

const CONDITIONS = {
  mood: [
    { id: 'happy', label: 'Happy', icon: '😊' },
    { id: 'stressed', label: 'Stressed', icon: '😫' },
    { id: 'sad', label: 'Sad', icon: '😢' },
    { id: 'tired', label: 'Tired', icon: '🥱' }
  ],
  hunger: [
    { id: 'peckish', label: 'Peckish', icon: '🥨' },
    { id: 'hungry', label: 'Hungry', icon: '🤤' },
    { id: 'starving', label: 'Starving!', icon: '🐺' }
  ],
  weather: [
    { id: 'sunny', label: 'Sunny', icon: '☀️' },
    { id: 'rainy', label: 'Rainy', icon: '🌧️' },
    { id: 'cold', label: 'Cold', icon: '❄️' },
    { id: 'hot', label: 'Hot', icon: '🔥' }
  ],
  time: [
    { id: 'breakfast', label: 'Breakfast', icon: '🌅' },
    { id: 'lunch', label: 'Lunch', icon: '☀️' },
    { id: 'dinner', label: 'Dinner', icon: '🌙' },
    { id: 'late-night', label: 'Late Night', icon: '🦉' }
  ]
};

export default function ConditionForm({ selectedConditions, onChange, onSubmit }) {
  
  const handleSelect = (category, value) => {
    // Toggle off if already selected, otherwise set to new value
    const newValue = selectedConditions[category] === value ? null : value;
    onChange(category, newValue);
  };

  const renderCategory = (category, title) => (
    <div className="form-group" key={category}>
      <label className="form-label">{title}</label>
      <div className="options-grid">
        {CONDITIONS[category].map(option => (
          <button
            key={option.id}
            type="button"
            onClick={() => handleSelect(category, option.id)}
            className={`option-btn ${selectedConditions[category] === option.id ? 'selected' : ''}`}
          >
            <span className="option-icon">{option.icon}</span>
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="glass-panel animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>How are you feeling?</h2>
      
      {renderCategory('mood', 'Mood')}
      {renderCategory('hunger', 'Hunger Level')}
      {renderCategory('weather', 'Vibe / Weather')}
      {renderCategory('time', 'Time of Day')}

      <button 
        className="btn-primary" 
        onClick={onSubmit}
        style={{ width: '100%', marginTop: '1rem' }}
      >
        Find My Food
      </button>
    </div>
  );
}
