import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { useEffect, useState } from 'react';

const UpcomingConference1 = () => {

   const [scale, setScale] = useState(1)

   useEffect(()=>{
      if (window.innerWidth > 800) {
         setScale(1.5)
      } else {
         setScale(null)

      }
   },[])

    return (
       <div style={{minHeight: "100vh"}}>
       <h2 className='conference2gsoTitle'>პროგრამა</h2>
        <div 
            className='pdfVc' 
        >
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl="/conference2.pdf" defaultScale={scale}/>
            </Worker>
        </div>
       </div>
    ); 
}

export default UpcomingConference1;
