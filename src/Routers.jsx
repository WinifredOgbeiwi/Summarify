import React from 'react'
import Header from './layout/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/web/Home'

const Routers = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </>
  )
}

export default Routers
