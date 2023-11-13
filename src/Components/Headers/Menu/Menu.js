import React from 'react'
import './Menu.css';



export const Menu = () => {
  return (
    <div className='header'>
        <div className='parts'>
          <div className='content'>
            <h4>DO YOU FIND FOR A BUILDER?</h4>
            <p>Get started on your construction journey today! Explore our website to discover our wide range of services, read testimonials from satisfied clients, and connect with us for any inquiries.</p>
           <button>Create an Account</button>
          </div>
          <div className="right-image">
            <img src='https://res.cloudinary.com/dgpl8g1nn/image/upload/v1699914693/buildme/pngwing_1_ryipcs.png' alt="" />
          </div>
        </div>

      </div>
  )
}

export default Menu;