import  { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    // Fetch jokes from the backend
    fetch('/api/jokes')
      .then(response => response.json())
      .then(data => setJokes(data))
      .catch(error => console.error('Error fetching jokes:', error));
  }, []);

  return (
    <div className="app-container">
      <h1>Connecting Frontend to the Backend</h1>
      <p>Total Jokes: {jokes.length}</p>
      <div className="jokes-container">
        {jokes.map((joke, index) => (
          <div className="joke-card" key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
