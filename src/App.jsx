import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import AllMaids from './components/allMaids/AllMaids'
import AllMaidDirect from './components/allMaidsDirect/AllMaidDirect'
import AllMaidAgency from './components/allMaidsAgency/AllMaidAgency'
import Jobs from './components/jobs/Jobs'
import Services from './components/services/Services'
import Package from './components/packages/Package'
import Contact from './components/contact/Contact'
import Profile from './components/home/Profile'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/about-us"  element={<About />} />
          <Route path="/all-maids"  element={<AllMaids />} />
          <Route path="/maids-direct"  element={<AllMaidDirect />} />
          <Route path="/maids-agency"  element={<AllMaidAgency />} />
          <Route path="/jobs"  element={<Jobs />} />
          <Route path="/view-packages"  element={<Package />} />
          <Route path="/services"  element={<Services />} />
          <Route path="/contact-us"  element={<Contact />} />
          {/* <Route path="/maids/:username" element={<Profile />} /> */}
        </Routes>

        <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App