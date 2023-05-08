import React from 'react';
import './App.css'

import {Header} from './components/index';
import {Experience, Footer, Navbar, Project, About} from './containers/index';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Project />
      {/* <Experience /> */}
      <Footer />
    </div>
  )
}

export default App
