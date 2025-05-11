import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Main from './components/Main';
import About from './components/About';
import logo from './img/logo.png'

function App() {
  const [hoverEffect, setHoverEffect] = React.useState(false);

  function changeEffect() {
    setHoverEffect(prevHover => !prevHover)
  }

  return (
    <BrowserRouter>
      <header className='header'>
        <div className="container">
          <div className="header__inner">
            <Link to='/' className="header__logo">
              <img src={logo} alt="" />
            </Link>
            <nav className="header__nav">
              <ul className="nav__inner">
                <li><Link onClick={changeEffect} to='/about' className='nav__link'>About</Link></li>
                <li><Link className='nav__link'>Vans</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <footer className="footer">
        <div className="container">
          <p>Ⓒ 2022 #VANLIFE</p>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default App
