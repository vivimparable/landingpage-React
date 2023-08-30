import React from 'react'
import { Routes,Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import About from '../sections/About';
import ContactMe from '../sections/ContactMe';
import Projects from '../sections/Projects';
export default function RoutesMain() {
  return (
    <>
        <Routes>
              <Route element={<MainPage />} path='/'/>
              <Route element={<About />} path='/About'/>
              <Route element={<ContactMe />} path='/ContactMe'/>
              <Route element={<Projects />} path='/Projects'/>
          </Routes>
    </>
  )
}
