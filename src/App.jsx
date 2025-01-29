import './App.css';
import { useState } from 'react';
import { puppyList } from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);

  console.log(puppies);

  return (
    <div>
      <h1>Puppy List</h1>
      {
        puppies.map((puppy) => (
          <p key={puppy.id}>{puppy.name}</p>
        ))
      }
    </div>
  );
}

export default App;
