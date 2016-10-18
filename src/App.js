import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

const App = React.createClass({
  render () {
    return (
      <main className='App'>
        <Header />
        <Home />
        <Footer />
      </main>
    )
  }
})

export default App
