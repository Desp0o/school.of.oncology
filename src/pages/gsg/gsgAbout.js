import React from 'react'
import "./gsgAbout.css"
import Footer from '../../components/footer/footer'
import LinkButtonComponent from '../../components/linkButtonComponent/LinkButtonComponent'
import gsg from "../../utils/images/GeorgianSocietyOfGeriatricOncology.webp"

export default function GsgAbout() {
  return (
    <div className='gsg_about'>
        <div className='gsg-about-inner'>
            <img src={gsg} className='' alt='main logo about page' />
            <p className='gsg_about_title'>ჩვენ შესახებ</p>

            <div className='gsg_about_desc'>
            &nbsp;&nbsp;&nbsp;ასოციაცია დაარსდა 2021 წელს, განკუთვნილია გერეატრიული ონკოლოგიით 
            დაინტერესებული სტუდენტებისთვის, რეზიდენტებისთვის და ყველა ონკოლოგისა და მომიჯნავე 
            სპეციალობის პერსონალისთვის, რომელსაც სურს გაიღრამოს ცოდნა გერიატრიული ონკოლოგიაში და 
            მიაღწიოს კარიერულ წინსვლას. ჩვენი მიზანია გავაღრმაოთ დარგობრივი ცოდნა და საფუძველი 
            ჩავუყაროთ საერთაშორისო ორგანიზაციებთან თანამშრომლობას, 
            რათა ყველასთვის თანაბრად ხელმისაწვდომი გავხადოთ გერიატრიული ონკოლოგიაში დახელოვნება.
                <br/>
                <br/> <b>დამფუძნებელი - ელენე მარიამიძე</b>
            </div>

            <div className='links_in_about'>
              <LinkButtonComponent link="/" name="ჩატარებული პროექტები" />
              <LinkButtonComponent link="/" name="სამომავლო პროექტები" />
              <LinkButtonComponent link="/" name="სახელმძღვანელოები" />
            </div>

        </div>

        <Footer />
      </div>
  )
}