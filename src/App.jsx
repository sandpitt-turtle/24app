import './App.css';
import { useState } from 'react';
import { puppyList } from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // Find the selected puppy
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div>
      <h1>Puppy List</h1>

     
      {puppies.map((puppy) => (
        <p 
          key={puppy.id} 
          onClick={() => setFeatPupId(puppy.id)} 
          style={{ cursor: "pointer", color: "blue" }}
        >
          {puppy.name}
        </p>
      ))}


      {featPupId && featuredPup && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid black" }}>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li><strong>Age:</strong> {featuredPup.age}</li>
            <li><strong>Email:</strong> {featuredPup.email}</li>
          </ul>
          
        
          <button 
            onClick={() => setFeatPupId(null)} 
            style={{ marginTop: "10px", padding: "5px 10px", cursor: "pointer" }}
          >
            Clear Selection
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
