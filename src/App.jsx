import './App.css';
import { useState } from 'react';
import { puppyList } from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);


  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="puppy-list">
      <img src="/public/logo.webp" alt="Puppy Bowl Logo" className="puppy-logo" />

      <h1>Puppy List</h1>

      
      {puppies.map((puppy) => (
        <p 
          key={puppy.id} 
          className="puppy-name"
          onClick={() => setFeatPupId(puppy.id)}
        >
          {puppy.name}
        </p>
      ))}

      
      {featPupId && featuredPup && (
        <div className="puppy-details">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li><strong>Age:</strong> {featuredPup.age}</li>
            <li><strong>Email:</strong> {featuredPup.email}</li>
          </ul>
          
    
          <button onClick={() => setFeatPupId(null)}>
            Clear Selection
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
