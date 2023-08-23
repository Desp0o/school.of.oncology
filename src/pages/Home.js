import "./Home.css"
import schoolLogo from "../utils/images/GeorgianSchoolOf oncology.webp"
import societyLogo from "../utils/images/GeorgianSocietyOfGeriatricOncology.webp"
import { useEffect, useState } from "react"

export default function Home(){

    const [values, setValues] = useState({})
    const valueHandler = (e)=> {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    useEffect(()=>{
        console.log(values);
    },[values])

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

                <div className="form">
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
                                onChange={valueHandler}
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
                                onChange={valueHandler}
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
                            onChange={valueHandler}
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
                                onChange={valueHandler}
                            />
                    </div>

                    <div className="academic_status">
                    <select  name="status"  className="all_input" onInput={valueHandler}>
                        <option value="s"  hidden>აირჩიეთ ხარისხი</option>
                        <option>სტუდენტი</option>
                        <option>რეზიდენტი</option>
                        <option>ექიმი</option>
                        <option>პროფესორი</option>
                        <option>სხვა</option>
                    </select>

                    </div>

                    <div className="btn_send">გაგზავნა</div>
                    
                </div>
            </div>
        </>
    )
}