import React, { useContext, useState } from 'react'
import  './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../pages/Context/StoreContext'
import { useUser, UserButton } from '@clerk/clerk-react'

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext);
  const { isSignedIn } = useUser();

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={()=>setMenu("home")} className={`${menu==="home"?"active":""}`}>home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={`${menu==="menu"?"active":""}`}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mob-app")} className={`${menu==="mob-app"?"active":""}`}>mobile app</a>
        <Link to='/donation' onClick={()=>setMenu("donation")} className={`${menu==="donation"?"active":""}`}>donation</Link>
        <a href='#footer' onClick={()=>setMenu("contact")} className={`${menu==="contact"?"active":""}`}>contact us</a>
        <Link to='/favourites' onClick={()=>setMenu("favourites")} className={`${menu==="favourites"?"active":""}`}>favourites</Link>
        <Link to='/myorder' onClick={()=>setMenu("orders")} className={`${menu==="orders"?"active":""}`}>my orders</Link>
      </ul>
      <div className="navbar-right">
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount()>0?"dot":""}></div>
        </Link>
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <div className="navbar-auth-buttons">
            <Link to="/sign-in">
              <button>sign in</button>
            </Link>
            <Link to="/sign-up">
              <button>sign up</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
