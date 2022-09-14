import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
const Home: NextPage = () => {
  const navHandle = () => {
    const element: HTMLElement = document.getElementById('nav-menu');
    const topbar: HTMLElement = document.getElementById('topbar');
    const topbarmenu: HTMLElement = document.getElementById('topbar-menu');
    element.classList.toggle('nav-handle');
    topbar.classList.toggle('topbar-handle');
    topbarmenu.classList.toggle('topbarmenu-handle');
  }
  return (
    <>
      <Head>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@700&display=swap" rel="stylesheet" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>
      <div className="top-bar" id='topbar'>
        <span className="material-symbols-outlined top-bar-menu" onClick={navHandle} id='topbar-menu'>
          menu
        </span>
        <div className="navbar-icon-topbar">
          {/* img */}
          <a href="/">ECOMMERCE-STORE</a>
        </div>
        <div className="navbar-user">
          <a href="/"><span className="material-icons">
            account_circle
          </span>USER</a>
        </div>
      </div>
      <nav id="nav-menu" className='navbar'>
        <span className="material-symbols-outlined" onClick={navHandle}>
          menu
        </span>
        <div className="navbar-icon">
          {/* img */}
          <a href="/">ECOMMERCE-STORE</a>
        </div>
        <div className="navbar-items">
          <ul>
            <li><span className="material-icons">
              home
            </span>HOME</li>
            <li><span className="material-icons">
              shopping_cart
            </span>CART</li>
            <li><span className="material-icons">
              filter_alt
            </span>GENRE</li>
          </ul>
        </div>
        <div className="navbar-searchbox">
          <input type='text' placeholder='Search' className='search-box    ' />
        </div>

        <div className="navbar-user">
          <a href="/"><span className="material-icons">
            account_circle
          </span>USER</a>
        </div>
      </nav>
    </>
  )
}

export default Home
