import './App.css';
import { useState } from 'react';
import { puppyList } from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // Find the selected puppy
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="puppy-list">
      <h1>Puppy List</h1>

      {/* Render list of puppy names */}
      {puppies.map((puppy) => (
        <p 
          key={puppy.id} 
          className="puppy-name"
          onClick={() => setFeatPupId(puppy.id)}
        >
          {puppy.name}
        </p>
      ))}

      {/* Render the selected puppy’s details */}
      {featPupId && featuredPup && (
        <div className="puppy-details">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li><strong>Age:</strong> {featuredPup.age}</li>
            <li><strong>Email:</strong> {featuredPup.email}</li>
          </ul>
          
          {/* Clear Selection Button */}
          <button onClick={() => setFeatPupId(null)}>
            Clear Selection
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
