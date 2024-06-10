import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Main from './components/Main'
import Aside from './components/Aside'
import Search from './components/Search'

import Home from './pages/Home'
import MelonPage from './pages/MelonPage'
import ApplePage from './pages/ApplePage'
import GeniePage from './pages/GeniePage'
import BugsPage from './pages/BugsPage'
import BillPage from './pages/BillPage'
import Recent from './pages/Recent'
import Favorites from './pages/Favorites'
import Mymusic from './pages/Mymusic'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Search />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='melon' element={<MelonPage />} />
          <Route path='bugs' element={<BugsPage />} />
          <Route path='apple' element={<ApplePage />} />
          <Route path='genie' element={<GeniePage />} />
          <Route path='bill' element={<BillPage />} />
          <Route path='recent' element={<Recent />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='mymusic' element={<Mymusic />} />
        </Routes>
      </Main>
      <Aside />
    </BrowserRouter>
  )
}

export default App