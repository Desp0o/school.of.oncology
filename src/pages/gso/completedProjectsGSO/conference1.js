import { useState } from "react";
import "./conferenceStyles.css"
import Footer  from "../../../components/footer/footer"

import con1 from "../../../utils/images/conference1/con0.webp"
import con2 from "../../../utils/images/conference1/con1.webp"
import con3 from "../../../utils/images/conference1/con2.webp"
import con4 from "../../../utils/images/conference1/con3.webp"
import con5 from "../../../utils/images/conference1/con4.webp"
import con6 from "../../../utils/images/conference1/con5.webp"
import con7 from "../../../utils/images/conference1/con6.webp"
import con8 from "../../../utils/images/conference1/con7.webp"
import con9 from "../../../utils/images/conference1/con8.webp"
import con10 from "../../../utils/images/conference1/con9.webp"
import con11 from "../../../utils/images/conference1/con10.webp"
import con12 from "../../../utils/images/conference1/con11.webp"
import con13 from "../../../utils/images/conference1/con12.webp"
import con14 from "../../../utils/images/conference1/con13.webp"
import con15 from "../../../utils/images/conference1/con14.webp"
import con16 from "../../../utils/images/conference1/con15.webp"
import con17 from "../../../utils/images/conference1/con16.webp"

import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'


export default function Conference1() {

    const imageArr = [
        con1, con2, con3, con4, con5, con6, con7, con8, con9, con10, con11, con12, con13, con14, con15, con16, con17
    ]


    const [index, setIndex] = useState(-1);

    return (
        <>
            <div className="conference1">
                <p className="conf1_title">ახალგაზრდებში ძუძუს კიბოს მართვის თანამედროვე მიდგომები და გამოწვევები 19.06.2021</p>
                <p className="conf1_desc">&nbsp;&nbsp;&nbsp;კონფერენციაში მონაწილეობდნენ ლოკალური და საერთაშორისო ექსპერტები, როგორიცაა-მატეო ლამბერტინი, დონ დიზონი, 
                სტეფანი გრაფი, მერი ენ ფენტონი, კევინ პუნიე.</p>

                <p className="competitors">მონაწილეთა რაოდენობა: 200</p>

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
                
                <div className="marginTop100" />
                <Footer />
            </div>
            
        </>
    );
}
