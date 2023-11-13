import React from 'react'
import './Navbar.css'


export const Navbar = () => {
  return (
    <div class="navbar">
    <div class="left-side">
        <div class="logo">BUILDME</div>
    </div>
    <div class="middle">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <div class="search-icon">&#128269;</div>
    </div>
    <div class="right-side">
        <div class="profile-icon">&#128100;</div>
    </div>
</div>
  )
}

export default Navbar;