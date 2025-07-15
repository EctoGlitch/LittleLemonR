
import './App.css';
import './Core Comps/Animation.css'
import Header from './Core Comps/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Core Comps/Footer'

function App() {
  return (
    <main className='relative'>
      <Header/>
      <Outlet/>
      <Footer/>
    </main>
  );
}

export default App;
