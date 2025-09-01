import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import UserComplainForm from './components/UserComplainForm';
import FeaturesInformation from './components/FeaturesInformation';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust scroll threshold as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header scrolled={scrolled} />
      <UserComplainForm />
      <FeaturesInformation />
      <Banner />
      <Contact />
      <Footer scrolled={scrolled} />
    </div>
  );
}

export default App;
