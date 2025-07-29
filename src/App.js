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

export const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
}

export const updateTimes = (state, date) => {
  const selectedDate = new Date(date)
  const dayOfWeek = selectedDate.getDay()

  switch (dayOfWeek) {
    case 1: // Monday
      return [] // Closed
    case 2: // Tuesday
    case 3: // Wednesday
    case 4: // Thursday
      return ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
    case 5: // Friday
    case 6: // Saturday
    case 0: // Sunday
      return ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    default:
      return initializeTimes()
  }
};

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
      <main className='relative'>
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
