import './App.css';
import { useState } from 'react';
import { puppyList } from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);

  console.log(puppies);

  return (
    <div>
      <h1>Puppy List</h1>
      <ul>
        {puppies.map((puppy) => (
          <li key={puppy.id}>{puppy.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;