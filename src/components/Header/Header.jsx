import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>
        Enjoy dining at home with our easy-to-use delivery service. Whether you crave comfort food, gourmet dishes, or healthy options, our platform connects you to local restaurants. Place your order and we’ll bring your favorite meals right to your door.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header