import "./conferenceStyles.css"

import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'


import con2 from "../../../utils/images/cobference3/con1.webp"
import con3 from "../../../utils/images/cobference3/con2.webp"
import con4 from "../../../utils/images/cobference3/con3.webp"
import con5 from "../../../utils/images/cobference3/con4.webp"
import con6 from "../../../utils/images/cobference3/con6.webp"
import con7 from "../../../utils/images/cobference3/con6.webp"
import con8 from "../../../utils/images/cobference3/con7.webp"
import con9 from "../../../utils/images/cobference3/con8.webp"
import con1 from "../../../utils/images/cobference3/con9.webp"


export default function Conference2() {

    const imageArr = [
        con1, con2, con3, con4, con5, con6, con7, con8, con9
    ]

    const pdfLink = (url) => {
        window.open("https://gso-gsgo.ge/programs/conference3.pdf", '_blank', 'noopener,noreferrer');
    }

    return (
        <>
            <div className="conference3">
                <p className="conf1_title">არაწვრილუჯრედული ფილტვის კიბოს მკურნალობის მიმოხილვა, სიახლეები და გამოწვევები </p>
                
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
                                <img className="lightBox_image lightBox_image_conference3" alt="gallery" src={image} key={index} loading="lazy"/>
                            )
                        })
                    }
                    
                   
                </SlideshowLightbox> 
                </div>
            </div>


            
            
        </>
    );
}
