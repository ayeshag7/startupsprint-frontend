import React from 'react'
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Hero from "../../components/Hero";
import Partners from '../../components/Partners';

function Home({ isDarkMode, toggleDarkMode }) {
  return (
    <main className='bg-white dark:bg-gray-900'>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
        <main className='min-h-screen'>

          <Hero isDarkMode={isDarkMode}/>

          <Partners isDarkMode={isDarkMode}/>

        </main>
        <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
    </main>
  )
}

export default Home;