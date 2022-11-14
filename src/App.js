import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='App'>

      <div style={{ width: isOpen ? '200px' : '80px' }} className='sidebar'>

        <div className='logo-details'>
          <div style={{display: isOpen ? "block" : "none"}} className='logo-name'>My App</div>
          <i onClick={toggle} class='bx bx-menu' id='btn'></i>
        </div>

        <ul className='nav-list'>

          <li>
            <i class='bx bx-search'></i>
            <input type='text' placeholder='search' />
            <span classname='links-name'>Search</span>
          </li>

          <li>
            <a href="#dashboard">
              <i class='bx bx-grid-alt'></i>
              <span style={{ display: isOpen ? "block" : "none" }} classname='links-name'>Dashboard</span>
            </a>
            <span className='tooltip'>Dashboard</span>
          </li>

          <li>
            <a href="#user">
              <i class='bx bx-user'></i>
              <span style={{ display: isOpen ? "block" : "none" }} classname='links-name'>User</span>
            </a>
            <span className='tooltip'>User</span>
          </li>

          <li>
            <a href="#messages">
              <i class='bx bx-chat'></i>
              <span style={{ display: isOpen ? "block" : "none" }} classname='links-name'>Messages</span>
            </a>
            <span className='tooltip'>Messages</span>
          </li>

          <li>
            <a href="#analytics">
              <i class='bx bx-pie-chart-alt-2'></i>
              <span style={{ display: isOpen ? "block" : "none" }} classname='links-name'>Analytics</span>
            </a>
            <span className='tooltip'>Analytics</span>
          </li>

          <li>
            <a href="#files">
              <i class='bx bx-folder'></i>
              <span style={{ display: isOpen ? "block" : "none" }} classname='links-name'>File Manager</span>
            </a>
            <span className='tooltip'>Files</span>
          </li>

          <li>
            <a href="#order">
              <i class='bx bx-cart-alt'></i>
              <span style={{ display: isOpen ? "block" : "none" }} classname='links-name'>Order</span>
            </a>
            <span className='tooltip'>Order</span>
          </li>

          <li>
            <a href="#files">
              <i class='bx bx-heart'></i>
              <span style={{ display: isOpen ? "block" : "none" }} classname='links-name'>Saved</span>
            </a>
            <span className='tooltip'>Saved</span>
          </li>

          <li>
            <a href="#setting">
              <i class='bx bx-cog'></i>
              <span style={{ display: isOpen ? "block" : "none" }} classname='links-name'>Setting</span>
            </a>
            <span className='tooltip'>Setting</span>
          </li>

          <li className='#profile'>
            <div className='profile-details'>
              <img src={logo} className='logo' alt='logo' />
              <div style={{ display: isOpen ? "block" : "none" }} className='name-job'>
                <div className='name'>Ian Tanui</div>
                <div className='job'>Web developer</div>
              </div>
            </div>
            <i class='bx bx-log-out' id='log-out'></i>

          </li>

        </ul>
        
      </div >
      <section class='home-section'>
          <div class='text'>Dashboard</div>
        </section>
    </div>
  );
}

export default App;
