import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

const App = () => {
  return (
        <div>
            <Header/>
            <Nav />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;