import "./Home.css"
import schoolLogo from "../utils/images/GeorgianSchoolOf oncology.webp"
import societyLogo from "../utils/images/GeorgianSocietyOfGeriatricOncology.webp"
import {useEffect, useRef, useState } from "react"
import emailjs from '@emailjs/browser';

export default function Home(){

    const [values, setValues] = useState({})
    const [verify, setVerify] = useState('verified')

    const nameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const dateRef = useRef()
    const statusRef = useRef()

    const veryfiControl = ()=>{
        setVerify('verified verified_active')

        setTimeout(()=>{
            setVerify('verified')
        },7000)
    }

    // იმეილის გასაგზავნი ფუნქცია

    
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        const regex = /[0-9!@#$%^&*()_+{}\[\]:;<>,./?~]/;
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

        if( nameRef.current.value.length === 0 ||
            lastNameRef.current.value.length === 0 ||
            emailRef.current.value.length === 0 ||
            dateRef.current.value.length < 7 ||
            statusRef.current.value.length === 0){
            
                if(nameRef.current.value.length === 0 || regex.test(nameRef.current.value)){
                    nameRef.current.style.border = "1px solid red"
                }else{
                    nameRef.current.style.border = "1px solid #7A868C"
                }
        
                if(lastNameRef.current.value.length === 0 || regex.test(lastNameRef.current.value)){
                    lastNameRef.current.style.border = "1px solid red"
                }
        
                if(emailRef.current.value.length === 0 || !emailRegex.test(emailRef.current.value)){
                    emailRef.current.style.border = "1px solid red"
                }
        
                if(dateRef.current.value.length < 7){
                    dateRef.current.style.border = "1px solid red"
                }
        
                if(statusRef.current.value === ""){
                    statusRef.current.style.border = "1px solid red"
                }


        }else{
            
            setValues({
                name: '',
                lastName: '',
                mail: '',
                birthDate: '',
                status: ''
            })

            veryfiControl()

            emailjs.sendForm('service_lypl80b', 'template_x85nblb', form.current, 'IC2qr9Obg8is6cSEL')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        }
    
        
    };

    
    


    const valuesHandler = (e)=> {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    useEffect(()=>{
        if(nameRef.current.value.length > 0){
            nameRef.current.style.border = "1px solid #7A868C"
        }

        if(lastNameRef.current.value.length > 0){
            lastNameRef.current.style.border = "1px solid #7A868C"
        }

        if(emailRef.current.value.length > 0){
            emailRef.current.style.border = "1px solid #7A868C"
        }

        if(dateRef.current.value.length > 0){
            dateRef.current.style.border = "1px solid #7A868C"
        }

        if(statusRef.current.value.length > 0){
            statusRef.current.style.border = "1px solid #7A868C"
        }
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
                                value={values.name}
                                onChange={valuesHandler}
                                ref={nameRef}
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
                                value={values.lastName}
                                onChange={valuesHandler}
                                ref={lastNameRef}
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
                            value={values.mail}
                            onChange={valuesHandler}
                            ref={emailRef}
                        />
                    </div>

                    <div className="birth_date">
                        <label htmlFor="birthDateId"></label>
                        <input 
                                name="birthDate" 
                                id="birthDateId"
                                type="text"
                                className="all_input" 
                                placeholder="დღე / თვე / წელი"
                                value={values.birthDate}
                                onChange={valuesHandler}
                                ref={dateRef}
                            />
                    </div>

                    <div className="academic_status">
                    <label htmlFor="selectID" />
                    <select  name="status" id="selectID"  className="all_input" onChange={valuesHandler} ref={statusRef} value={values.status}>
                        <option value=""  hidden>აირჩიეთ აკადემიური ხარისხი</option>
                        <option>სტუდენტი</option>
                        <option>რეზიდენტი</option>
                        <option>ექიმი</option>
                        <option>პროფესორი</option>
                        <option>სხვა</option>
                    </select>

                    </div>

                    <div onClick={sendEmail} className="btn_send">გაგზავნა</div>

                    <p className={verify}>თქვენი მოთხოვნა გაიგზავნა!</p>
                    
                </form>
            </div>
        </>
    )
}