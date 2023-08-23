import { useState } from "react";
import "./conferenceStyles.css"
import Footer  from "../../../components/footer/footer"

import con1 from "../../../utils/images/conference2/con0.webp"
import con2 from "../../../utils/images/conference2/con1.webp"
import con3 from "../../../utils/images/conference2/con2.webp"
import con4 from "../../../utils/images/conference2/con3.webp"
import con5 from "../../../utils/images/conference2/con4.webp"
import con6 from "../../../utils/images/conference2/con5.webp"
import con7 from "../../../utils/images/conference2/con6.webp"
import con8 from "../../../utils/images/conference2/con7.webp"
import con9 from "../../../utils/images/conference2/con8.webp"
import con10 from "../../../utils/images/conference2/con9.webp"
import con11 from "../../../utils/images/conference2/con10.webp"
import con12 from "../../../utils/images/conference2/con11.webp"
import con13 from "../../../utils/images/conference2/con12.webp"
import con14 from "../../../utils/images/conference2/con13.webp"
import con15 from "../../../utils/images/conference2/con14.webp"
import con16 from "../../../utils/images/conference2/con15.webp"
import con17 from "../../../utils/images/conference2/con17.webp"
import con19 from "../../../utils/images/conference2/con19.webp"
import con20 from "../../../utils/images/conference2/con20.webp"
import con21 from "../../../utils/images/conference2/con21.webp"
import con22 from "../../../utils/images/conference2/con22.webp"

import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'


export default function Conference2() {

    const pdfLink = (url) => {
        window.open("https://gso-gsgo.ge/programs/eng-programa.pdf", '_blank', 'noopener,noreferrer');
    }

    const imageArr = [
        con1, con2, con3, con4, con5, con6, con7, con8, con9, con10, con11, con12, con13, con14, con15, con16, con17, con19, con20, con21
    ]

    return (
        <>
            <div className="conference1">
                <p className="conf1_title">Challenges in young patients with breast cancer</p>
                
                <div className="download">
                    <p className="download_txt">იხილეთ კონფერენციის პროგრამა</p>
                     <p className="linkTag" onClick={pdfLink}>გადმოწერე</p>      
                </div>


                <p className="gallery_title">გალერეა</p>  

                <div className="image_gallery">
                <SlideshowLightbox className="image_layout" slideshowInterval="3000"  modalClose="clickOutside">
                    {
                        imageArr.map((image,index)=>{
                            return(
                                <img className="lightBox_image" src={image} key={index} loading="lazy"/>
                            )
                        })
                    }
                    
                   
                </SlideshowLightbox> 
                </div>
                

            </div>
            
        </>
    );
}
