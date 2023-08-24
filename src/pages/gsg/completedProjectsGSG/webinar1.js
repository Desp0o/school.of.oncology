import './styles.css'
import webinarCover from "../../../utils/images/webinar.webp"

export default function Webinar1() {


    return (
        <>
            <div className="webinar1">
                <p className="conf1_title">ESO Webinar</p>

                <img src={webinarCover} alt='eso webinar' className='webinar_img' />
            </div>
            
        </>
    );
}
