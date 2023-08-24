import "./Home.css"
import schoolLogo from "../utils/images/GeorgianSchoolOf oncology.webp"
import societyLogo from "../utils/images/GeorgianSocietyOfGeriatricOncology.webp"
import {useRef } from "react"
import emailjs from '@emailjs/browser';

export default function Home(){

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_lypl80b', 'template_x85nblb', form.current, 'IC2qr9Obg8is6cSEL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <>
            <div className="main_page">
                <div className="main_logos">

                    {/* ლოგო 1 */}
                    <div className="logo_text">
                        <img src={schoolLogo} alt="" className="logo1" />
                        <p>საქართველოს ონკოლოგიის სკოლა</p>
                    </div>

                    {/* ლოგო 2 */}
                    <div className="logo_text logoTXT2">
                        <img src={societyLogo} alt="" className="logo2" />
                        <p>საქართველოს გერიატრიული ონკოლოგიის საზოგადოება</p>
                    </div>
                    
                </div>

                <form className="form" ref={form}>
                    <h1 className="form_title">შემოგვიერთდით</h1>

                    <div className="name_title_input">
                        <div className="name">
                            <label htmlFor="nameId"></label>
                            <input 
                                name="name" 
                                id="nameId"
                                type="text" 
                                className="all_input name_lastName" 
                                placeholder="სახელი"
                            />
                        </div>

                        <div className="lastName">
                            <label htmlFor="lastNameId"></label>
                            <input 
                                name="lastName" 
                                id="lastNameId"
                                type="text" 
                                className="all_input name_lastName" 
                                placeholder="გვარი"
                            />
                        </div>
                    </div>

                    <div className="mail_input">
                        <label htmlFor="mailId"></label>
                        <input 
                            name="mail" 
                            id="mailId"
                            type="email" 
                            className="all_input" 
                            placeholder="ელ.ფოსტა"
                        />
                    </div>

                    <div className="birth_date">
                        <label htmlFor="birthDateId"></label>
                        <input 
                                name="birthDate" 
                                id="birthDateId"
                                type="date" 
                                className="all_input" 
                                placeholder="დდ/თთ/წწ"
                            />
                    </div>

                    <div className="academic_status">
                    <select  name="status"  className="all_input">
                        <option value="s"  hidden>აირჩიეთ ხარისხი</option>
                        <option>სტუდენტი</option>
                        <option>რეზიდენტი</option>
                        <option>ექიმი</option>
                        <option>პროფესორი</option>
                        <option>სხვა</option>
                    </select>

                    </div>

                    <div onClick={sendEmail} className="btn_send">გაგზავნა</div>
                    
                </form>
            </div>
        </>
    )
}