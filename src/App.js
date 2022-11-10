import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ width: isOpen ? "200px" : "80px" }} className="sidebar">

      <div class="logo-details">
        <i class='bx bxl-c-plus-plus icon'></i>
        <div class="logo-name">My App</div>
        <i onClick={toggle} class='bx bx-menu' id="btn"></i>
      </div>

      <ul class="nav-list">
        <li>
          <i class='bx bx-search' ></i>
          <input type="text" placeholder="Search..." />
          <span class="tooltip">Search</span>
        </li>

        <li>
          <a href="#dashboard">
            <i class='bx bx-grid-alt'></i>
            <span class="links-name">Dashboard</span>
          </a>
          <span class="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#user">
            <i class='bx bx-user' ></i>
            <span class="links-name">User</span>
          </a>
          <span class="tooltip">User</span>
        </li>
        <li>
          <a href="#messages">
            <i class='bx bx-chat' ></i>
            <span class="links-name">Messages</span>
          </a>
          <span class="tooltip">Messages</span>
        </li>
        <li>
          <a href="#analytics">
            <i class='bx bx-pie-chart-alt-2' ></i>
            <span class="links-name">Analytics</span>
          </a>
          <span class="tooltip">Analytics</span>
        </li>
        <li>
          <a href="#files">
            <i class='bx bx-folder' ></i>
            <span class="links-name">File Manager</span>
          </a>
          <span class="tooltip">Files</span>
        </li>
        <li>
          <a href="#order">
            <i class='bx bx-cart-alt' ></i>
            <span class="links-name">Order</span>
          </a>
          <span class="tooltip">Order</span>
        </li>
        <li>
          <a href="#saved">
            <i class='bx bx-heart' ></i>
            <span class="links-name">Saved</span>
          </a>
          <span class="tooltip">Saved</span>
        </li>
        <li>
          <a href="#setting">
            <i class='bx bx-cog' ></i>
            <span class="links-name">Setting</span>
          </a>
          <span class="tooltip">Setting</span>
        </li>

        <li class="profile">
          <div class="profile-details">
            <img src={logo} className="App-logo" alt="logo" />
            <div class="name-job">
              <div class="name">Ian Tanui</div>
              <div class="job">Web developer</div>
            </div>
          </div>
          <i class='bx bx-log-out' id="log_out" ></i>
        </li>
      </ul>

      <section class="home-section">
        <div class="text">Dashboard</div>
      </section>
    </div>
  );
}

export default App;
