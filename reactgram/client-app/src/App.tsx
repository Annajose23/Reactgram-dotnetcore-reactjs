import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => setActivities(response.data))
  },[]);
  return (
    <div className="App">
      <ul>
      {activities.map((activity:any) =>
        <li key={activity.id}>{activity.title}</li> )}
      </ul>
      
    </div>
  );
}

export default App;
