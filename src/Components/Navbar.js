import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import "./Navbar.css"
export default function Navbar() {
  const [active,setActive]=useState("header")
  const [toggle, setToggle] = useState(false)
  const handleHeader= ()=>{
    window.addEventListener("scroll",() => {
      if(window.scrollY > 50){
        setActive("header active");
      }
      else{
        setActive("header active")
      }
    })
  }
  useEffect(()=>{
    handleHeader();
  },[])

  const navigate = useNavigate()
  return (
    <div>
        
    <header class={active} data-header>
    <div class="container">

      <div class="overlay" data-overlay></div>

      <Link to="/" class="logo">
        <img src="/images/logo.svg" alt="Filmlane logo"/>
      </Link>

      <div class="header-actions">

        <button class="search-btn">
          <i onClick={() => navigate('/Search')} class="fa-solid fa-magnifying-glass"></i>
        </button>

        <div class="lang-wrapper">
          <label for="language">
            <ion-icon name="globe-outline"><i class="fa-solid fa-comments"></i></ion-icon>
          </label>

          <select name="language" id="language">
            <option value="en">EN</option>
            <option value="au">AU</option>
            <option value="ar">AR</option>
            <option value="tu">TU</option>
          </select>
        </div>

        
          <Link to="/Form">
            <button  class="btn btn-primary">
            Log In
           </button>
          </Link>
        

      </div>

      <button class="menu-open-btn" data-menu-open-btn>
       <i onClick={() => setToggle(!toggle)} style={{color:"white"}} class="fa-solid fa-bars"></i>
      </button>

      <nav class={toggle ? "navbar active" : "navbar" }data-navbar>

      <div class="navbar-top">

     <a href="./index.html" class="logo">
    <img src="/images/logo.svg" alt="Filmlane logo"/>
    </a>

     <button class="menu-close-btn" data-menu-close-btn>
     <i onClick={() => setToggle(!toggle)} style={{color:"white"}} class="fa-sharp fa-solid fa-xmark ml-3 mt-2"></i>
     </button>

    </div>
        
        <ul class="navbar-list">

          <li>
            <Link to="/" class="navbar-link">Home</Link>
          </li>

          <li>
          <Link to="/Movie" class="navbar-link">Movie</Link>
          </li>

          <li>
             <Link to="/TvShow" class="navbar-link">Tv-Show</Link>
          </li>

          <li>
          <Link to="/WebSeries" class="navbar-link">Web Series</Link>
          </li>

          <li>
            <a href="#" class="navbar-link">Pricing</a>
          </li>
          <li>
            <a onClick={() => navigate('/Search')} href="#" class="navbar-link hide ">Search</a>
          </li>
          <form className=" my-2 my-lg-0 mr-3">
      <div className=" align-items-center d-flex justify-content-center">
      
      </div>
    </form>

        </ul>
        

        <ul class="navbar-social-list">

          <li>
            <a href="#" class="navbar-social-link">
            <i class="fa-brands fa-twitter"></i>
            </a>
          </li>

          <li>
            <a href="#" class="navbar-social-link">
            <i class="fa-brands fa-facebook"></i>
            </a>
          </li>

          <li>
            <a href="#" class="navbar-social-link">
            <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>

          <li>
            <a href="#" class="navbar-social-link">
            <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          

        </ul>
        

      </nav>

    </div>
  </header>
    </div>
  )
}
