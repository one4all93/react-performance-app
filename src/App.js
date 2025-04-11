import { useEffect , useState } from 'react';
import './App.css';
import A from './component/A';
import B from './component/B';

function App() {

  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div style={{ display: 'flex', gap: '1rem' }}>
        <A message={value} posts={posts}/>
        <B message={value} posts={posts}/>
      </div>
    </div>
  );
}

export default App;
