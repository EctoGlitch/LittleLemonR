
import './App.css';
import './Core Comps/Animation.css'
import Header from './Core Comps/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main className='relative'>
      <Header />
      <Outlet/>
    </main>
  );
}

export default App;
