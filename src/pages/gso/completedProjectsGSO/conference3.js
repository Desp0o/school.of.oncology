import "./conferenceStyles.css"

import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'


export default function Conference2() {

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
            </div>
            
        </>
    );
}
