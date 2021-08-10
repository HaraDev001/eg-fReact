import React from 'react';

const NavTabs = ({activeTab, onTabChange, cartCount, total}) => (
    <nav className="App-nav">
        <ul>
            <li className={`App-nav-item ${activeTab===0&&'selected'}`}>
                <a onClick={()=>onTabChange(0)}>Shirts</a>
            </li>
            <li className={`App-nav-item ${activeTab===1&&'selected'}`}>
                <a onClick={()=>onTabChange(1)}>Laptops</a>
            </li>
            <li className={`App-nav-item ${activeTab===2&&'selected'}`}>
                <a onClick={()=>onTabChange(2)}>Cart
                {cartCount!==0 && <span className='badge badge-info'>  {cartCount}</span>}
                </a>
            </li>
            <li className = "App-nav-item right-nav-item">
                {cartCount!==0 && <span>${total}</span>}
            </li>
        </ul>
    </nav>
);

export default NavTabs;