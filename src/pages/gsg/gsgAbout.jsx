import React from 'react'
import "./gsgAbout.css"
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
              <LinkButtonComponent link="/pages/gsg/completedProjectsGSG" name="ჩატარებული პროექტები" />
              <LinkButtonComponent link="/pages/gsg/futureProjectsGSG" name="სამომავლო პროექტები" />
              <LinkButtonComponent link="/pages/gsg/booksGSG" name="სახელმძღვანელოები" />
            </div>

        </div>
      </div>
  )
}
