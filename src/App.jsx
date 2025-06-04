import React from 'react'
import Navbar from './componenets/Navbar.jsx'
import Hero from './componenets/Hero.jsx'
import BusinessPartnersComponent from './componenets/BusinessPartnersComponent.jsx'
import Monitoring from './componenets/Monitoring.jsx'
import Services from './componenets/Services.jsx'
import Newsletter from './componenets/Newsletter.jsx'
const App = () => {
  return (
    
    <main className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <BusinessPartnersComponent/>
    
      <Monitoring/>
      <Services/>
      <Newsletter/>
    </main>
  )
}

export default App