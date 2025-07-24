import logo from './Img/icons_assets/LogoM.svg'
import './App.css';
import './Core Comps/Animation.css'
import Header from './Core Comps/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Core Comps/Footer'
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Little Lemon</title>
        <meta name="description" content=" This is the Little Lemon Resturant" />
        <meta name="keywords" content="React, Mediterranean, Helmet, SEO, Meta Tags" />
        <meta name="author" content="Christen Shubaly" />
        <meta property="og:title" content="Little Lemon" />
        <meta property="og:description" content="This is the Little Lemon homepage." />
        <meta property="og:image" content={logo} />
    </Helmet>
    <main className='relative'>
      <Header/>
      <Outlet/>
      <Footer/>
    </main>
    </>
  );
}

export default App;
