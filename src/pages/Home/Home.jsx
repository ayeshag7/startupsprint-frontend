import React from 'react'
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import { SmoothScrollHero } from '../../components/SmoothScrollHero';

function Home({ isDarkMode, toggleDarkMode }) {
  return (
    <>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
        <main className='min-h-screen'>

          <SmoothScrollHero/>

        </main>
        <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
    </>
  )
}

export default Home;