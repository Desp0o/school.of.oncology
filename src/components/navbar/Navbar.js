import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

import schoolLogo from "../../utils/images/GeorgianSchoolOf oncology.webp"
import societyLogol from "../../utils/images/GeorgianSocietyOfGeriatricOncology.webp"
import navbarTabs from "../../utils/icons/hamburger.png"
import closeX from "../../utils/icons/close.png"

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

  return (
    <>
        <div className='navbar'>

          <img src={navbarIcons} alt='navbar sticks' className='navbar_btn' onClick={burgerHandler}/>

          <div className='navbar_gso'>
            <div className='navbar_header1'>
              <img src={schoolLogo} className='navabr_logo_1' alt='navbar logo1'/>
            </div>

            <div className='links'>
              <Link to="/pages/gso/AboutUs" className='nav_links'>ჩვენ შესახებ</Link>
              <Link to="/pages/gso/completedProjectsGSO" className='nav_links'>ჩატარებული პროექტები</Link>
              <Link to="/" className='nav_links'>სამომავლო პროექტები</Link>
              <Link to="/" className='nav_links'>სახელმძღვანელოები</Link>
              <Link to="/" className='nav_links'>პაციენტებისთვის</Link>
              <Link to="/" className='nav_links'>ფეისბუქ ჯგუფი</Link>
            </div>
          </div>

          <div className='navbar_gsg'>
            <div className='navbar_header1'>
              <img src={societyLogol} className='navabr_logo_1' alt='navbar logo1'/>
            </div>

            <div className='links'>
              <Link to="/pages/gsg/gsgAbout" className='nav_links'>ჩვენ შესახებ</Link>
              <Link to="" className='nav_links'>ჩატარებული პროექტები</Link>
              <Link to="/" className='nav_links'>სამომავლო პროექტები</Link>
              <Link to="/" className='nav_links'>სახელმძღვანელოები</Link>
              <Link to="/" className='nav_links'>ფეისბუქ ჯგუფი</Link>
            </div>
          </div>
            
        </div>

        <div className={dashboard}>

          <div className='navbar_gso_res'>
              <div className='navbar_header1'>
                <img src={schoolLogo} className='navabr_logo_1' alt='navbar logo1'/>
              </div>

              <div className='links'>
                <Link to="/pages/gso/AboutUs" className='nav_links'>ჩვენ შესახებ</Link>
                <Link to="/pages/gso/completedProjectsGSO" className='nav_links'>ჩატარებული პროექტები</Link>
                <Link to="/" className='nav_links'>სამომავლო პროექტები</Link>
                <Link to="/" className='nav_links'>სახელმძღვანელოები</Link>
                <Link to="/" className='nav_links'>პაციენტებისთვის</Link>
                <Link to="/" className='nav_links'>ფეისბუქ ჯგუფი</Link>
              </div>
            </div>

          <div className='navbar_gsg_res'>
            <div className='navbar_header1'>
              <img src={societyLogol} className='navabr_logo_1' alt='navbar logo1'/>
            </div>

            <div className='links'>
              <Link to="/pages/gsg/gsgAbout" className='nav_links'>ჩვენ შესახებ</Link>
              <Link to="/pages/gsg/completedProjectsGSG" className='nav_links'>ჩატარებული პროექტები</Link>
              <Link to="/" className='nav_links'>სამომავლო პროექტები</Link>
              <Link to="/" className='nav_links'>სახელმძღვანელოები</Link>
              <Link to="/" className='nav_links'>ფეისბუქ ჯგუფი</Link>
            </div>
          </div>
        </div>
    </>
  )
}
