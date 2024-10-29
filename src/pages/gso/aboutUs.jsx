import React from 'react'
import "./aboutUs.css"

import gso from "../../utils/images/GeorgianSchoolOf oncology.webp"
import LinkButtonComponent from '../../components/linkButtonComponent/LinkButtonComponent'

export default function AboutUs() {
  return (
    <>
      <div className='gso_about'>
        <div className='gso-about-inner'>
            <img src={gso} className='' alt='main logo about page' />
            <p className='gso_about_title'>ჩვენ შესახებ</p>

            <div className='gs0_about_desc'>
            &nbsp;&nbsp;&nbsp;ასოციაცია დაარსდა 2021 წელს, განკუთვნილია ონკოლოგიით დაინტერესებული სტუდენტებისთვის,
             რეზიდენტებისთვისა და ყველა სპეციალობის პერსონალისთვის, რომელსაც სურს გაიღრმაოს ცოდნა
              ონკოლოგიაში და მიაღწიოს კარიერულ წინსწვლას. ასაკი შეუზღუდავია. გაგიზიარებთ სტატიებს,
               ახალ სამეცნიერო გამოწვევებს, საინტერესო პრეოქტებს და რაც მთავარია გავიღრმავებთ 
               საერთაშორისო ორგანიზაციებთან თანამშრომლობას, რათა ყველასთვის თანაბრად ხელმისაწვდომი 
               გავხადოთ ონკოლოგიაში დახელოვნება. 
                <br/>
                <br/> <b>დამფუძნებელი - ელენე მარიამიძე</b>
            </div>

            

            <div className='links_in_about'>
              <LinkButtonComponent link="/gso/collaborations" name="საერთაშირისო ასოციაებთან კოლაბორაცია" />
              <LinkButtonComponent link="/gso/completedProjectsGSO" name="ჩატარებული პროექტები" />
              <LinkButtonComponent link="/gso/futureProjects" name="სამომავლო პროექტები" />
              <LinkButtonComponent link="/gso/books" name="სახელმძღვანელოები" />
              <LinkButtonComponent link="/gso/patient" name="პაციენტებისთვის" />
            </div>

        </div>

      </div>


    </>
  )
}
