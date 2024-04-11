import React from "react";
import "./upcoming.css";

export default function UpcomingConference() {
  return (
    <>
      <div className="upcoming">
        <p className="compl_proj_title">სამომავლო პროექტი</p>

        <div className="upgomint_content">
          <p>
            20 აპრილს თბილისში, სასტუმრო "Hilton Garden Inn"-ის საკონფერენციო
            დარბაზში გაიმართება მე-3 ყოველწლიური საერთაშორისო კონფერენცია -
            “ძუძუს კიბო ახალგაზრდებში - თანამედროვე მიდგომები და გამოწვევები”.
          </p>
          <br />
          <p>კონფერენცია ტარდება საქართველოს ონკოლოგიის სკოლის, თოდუას კლინიკის  და  თბილისის სახელმწიფო უნივერსიტეტის ორგანიზებით.</p>
          <br />
          <p>კონფერენციას მინიჭებული აქვს ESO Recommended სტატუსი (ევროპის ონკოლოგიის სკოლის მიერ რეკომენდირებული ღონისძიება)</p>
          <br/>
          <p className="upcomin_txt">
            თარიღი: <span>20.04.2024</span>
          </p>
          <p className="upcomin_txt">
            მოწვეული სპიკერები: მატეო ლამბერტინი, ფატიმა კარდოზო,
            ევროკავშირიდან-მედდა, რადიაციული ონკოლოგი-ევროპიდან.
          </p>
          <br />
          <p>წინასწარი რეგისტრაცია აუცილებელია სერტიფიცირებული სპეცილიასტებისთვის, ვისაც უწყვეტი პროფესიული განვითარების ქულა (უპგ ქულა) ესაჭიროებათ.</p>
          <br/>
          <p>უპგ ქულის მისანიჭებლად ადგილების რაოდენობა შეზღუდულია, გთხოვთ დროულად გაიაროთ რეგისტრაცია ბმულზე:￼</p>
          <a href="https://register.onkologia.ge/?fbclid=IwAR22G7azVJFITA7R6XSmZJrbPNWietLVLgzlxZvEG75CLog00GJIeQ606OQ_aem_AdmvFZ8HMUFaNK4X3WqBmGWsLKNkNWAFBBQ3peQ5WqPi0HlKLeicAgGv82oa14-sQKCEP4d38IR_K5dpKNPfcxzx" target="_blank" style={{color: 'var(--shidni)'}}>სარეგისტრაციო ფორმა</a>
        </div>
      </div>
    </>
  );
}
