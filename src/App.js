import logo from './Img/icons_assets/LogoM.svg'
import './App.css'
import './Core Comps/Animation.css'
import Header from './Core Comps/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Core Comps/Footer'
import { Helmet } from "react-helmet"
import { CartProvider, useCart } from './Core Comps/cart_context'
import Alert from './Alert Comps/Alert'
import { useReducer } from 'react'
import { fetchAPI } from './Core Comps/BookingApi'

export const initializeTimes = () => {
  return fetchAPI(new Date())
}

export const updateTimes = (state, date) => {
  return fetchAPI(new Date(date))
}

function AppContent() {
  const { alertMessage, alertType } = useCart()
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

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
      <main className='relative' role="main">
        <Header/>
        <Outlet context={{ availableTimes, dispatch }}/>
        <Footer/>
      </main>
      <Alert message={alertMessage} type={alertType} />
    </>
  )
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}

export default App
