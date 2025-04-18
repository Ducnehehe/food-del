import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

export const Navbar = ({ setShowLogin }) => {

  const [menu,setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext)
 
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu"> 
            <Link to='/' onClickCapture={()=>setMenu("home")} className={menu==="home"?"active":""} >Trang chủ</Link>
            <a href='#explore-menu' onClickCapture={()=>setMenu("menu")} className={menu==="menu"?"active":""} >Thực đơn</a>
            <a href='#app-download' onClickCapture={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""} >Ứng dụng di động</a>
            <a href='#footer' onClickCapture={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""} >Liên hệ</a>
        </ul>

        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Đăng nhập</button>
        </div>
    </div>
  )
}
