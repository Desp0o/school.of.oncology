import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

import schoolLogo from "../../utils/images/GeorgianSchoolOf oncology.webp"
import societyLogol from "../../utils/images/GeorgianSocietyOfGeriatricOncology.webp"
import navbarTabs from "../../utils/icons/hamburger.webp"
import closeX from "../../utils/icons/close.webp"

export default function Navbar() {

  const [navbarIcons, setNavbarIcon] = useState(navbarTabs)
  const [isOpened, setIsOpened] = useState(false)
  const [dashboard, setDashBouard] = useState('dashboard')

  const burgerHandler = ()=> {
    if(!isOpened){
      setNavbarIcon(closeX)
      setIsOpened(true)
      setDashBouard("dashboard dashboard_active")
    }else{
      setNavbarIcon(navbarTabs)
      setIsOpened(false)
      setDashBouard('dashboard')
    }
  }

  const linkHandler = ()=> {
    setIsOpened(false)
    setNavbarIcon(navbarTabs)
    setDashBouard('dashboard')
  }

  return (
    <>
        <div className='navbar'>

          <Link to='/' className='navbar_icon'>GSO-GSGO</Link>
          <img src={navbarIcons} alt='navbar sticks' className='navbar_btn' onClick={burgerHandler}/>

          <Link to="/" className='nav_links home_link'>მთავარი</Link>

          <div className='navbar_gso'>
            <div className='navbar_header1'>
              <img src={schoolLogo} className='navabr_logo_1' alt='navbar logo1'/>
            </div>

            <div className='links'>
              <Link to="/pages/gso/AboutUs" className='nav_links'>ჩვენ შესახებ</Link>
              <Link to="/pages/gso/completedProjectsGSO" className='nav_links'>ჩატარებული პროექტები</Link>
              <Link to="/pages/gso/futureProjects" className='nav_links'>სამომავლო პროექტები</Link>
              <Link to="/pages/gso/collaborations" className='nav_links'>საერთაშორისო ასოციაციებთან კოლაბორაცია</Link>
              <Link to="/pages/gso/books" className='nav_links'>სახელმძღვანელოები</Link>
              <Link to="/pages/gso/patient" className='nav_links'>პაციენტებისთვის</Link>
              <Link to="https://www.facebook.com/groups/178935787469269" target='_blank' rel='noopener noreferrer' className='nav_links'>ფეისბუქ ჯგუფი</Link>
            </div>
          </div>

          <div className='navbar_gsg'>
            <div className='navbar_header1'>
              <img src={societyLogol} className='navabr_logo_1' alt='navbar logo1'/>
            </div>

            <div className='links'>
              <Link to="/pages/gsg/gsgAbout" className='nav_links'>ჩვენ შესახებ</Link>
              <Link to="/pages/gsg/completedProjectsGSG" className='nav_links'>ჩატარებული პროექტები</Link>
              <Link to="/pages/gsg/futureProjectsGSG" className='nav_links'>სამომავლო პროექტები</Link>
              <Link to="/pages/gsg/booksGSG" className='nav_links'>სახელმძღვანელოები</Link>
              <Link to="https://www.facebook.com/groups/178935787469269" target='_blank' rel='noopener noreferrer' className='nav_links'>ფეისბუქ ჯგუფი</Link>
            </div>
          </div>
            
        </div>

        <div className={dashboard}>

          <div className='navbar_gso_res'>
              <div className='navbar_header1'>
                <img src={schoolLogo} className='navabr_logo_1' alt='navbar logo1'/>
              </div>

              <div className='links'>
                <Link to="/pages/gso/AboutUs" className='nav_links' onClick={linkHandler}>ჩვენ შესახებ</Link>
                <Link to="/pages/gso/completedProjectsGSO" className='nav_links' onClick={linkHandler}>ჩატარებული პროექტები</Link>
                <Link to="/pages/gso/futureProjects" className='nav_links' onClick={linkHandler}>სამომავლო პროექტები</Link>
                <Link to="/pages/gso/collaborations" className='nav_links' onClick={linkHandler}>საერთაშორისო ასოციაციებთან კოლაბორაცია</Link>
                <Link to="/pages/gso/books" className='nav_links' onClick={linkHandler}>სახელმძღვანელოები</Link>
                <Link to="/pages/gso/patient" className='nav_links' onClick={linkHandler}>პაციენტებისთვის</Link>
                <Link to="https://www.facebook.com/groups/178935787469269" target='_blank' rel='noopener noreferrer' className='nav_links' onClick={linkHandler}>ფეისბუქ ჯგუფი</Link>
              </div>
            </div>

          <div className='navbar_gsg_res'>
            <div className='navbar_header1'>
              <img src={societyLogol} className='navabr_logo_1' alt='navbar logo1'/>
            </div>

            <div className='links'>
              <Link to="/pages/gsg/gsgAbout" className='nav_links' onClick={linkHandler}>ჩვენ შესახებ</Link>
              <Link to="/pages/gsg/completedProjectsGSG" className='nav_links' onClick={linkHandler}>ჩატარებული პროექტები</Link>
              <Link to="/pages/gsg/futureProjectsGSG" className='nav_links' onClick={linkHandler}>სამომავლო პროექტები</Link>
              <Link to="/pages/gsg/booksGSG" className='nav_links' onClick={linkHandler}>სახელმძღვანელოები</Link>
              <Link to="https://www.facebook.com/groups/178935787469269" target='_blank' rel='noopener noreferrer' className='nav_links' onClick={linkHandler}>ფეისბუქ ჯგუფი</Link>
            </div>
          </div>
        </div>
    </>
  )
}
