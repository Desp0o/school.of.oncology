import gemcetabine from "../utils/images/patient/gemcitabine_cover.webp"
import folox from "../utils/images/patient/folfox_cover.webp"
import cisplatin from "../utils/images/patient/ciplatin_cover.webp"
import capox from "../utils/images/patient/capox_cover.webp"
import capecitabine from "../utils/images/patient/capecitabine_cover.webp"
import myths from '../utils/images/myths.webp'
import care from '../utils/images/patient/care_cover.webp'
import feeding from '../utils/images/patient/feeding_cover.webp'
import practicalHandbook from '../utils/images/patient/practicalHandbook_cover.webp'


export const patientDBgso = [
    {
        title: 'გემციტაბინი-GEMCITABINE',
        cover: `${gemcetabine}`,
        link: 'https://gso-gsgo.ge/fotPatients/GEMCITABINE.pdf'
    },
    
    {
        title: 'ფოლფოქსი-FOLFOX',
        cover: `${folox}`,
        link: 'https://gso-gsgo.ge/fotPatients/FOLFOX.pdf'
    },

    {
        title: 'ცისპლატინ-გემციტაბინი-CISPLATIN-GEMCITABINE',
        cover: `${cisplatin}`,
        link: 'https://gso-gsgo.ge/fotPatients/CISPLATIN-GEMCITABINE.pdf'
    },

    {
        title: 'კაპოქსი-CAPOX',
        cover: `${capox}`,
        link: 'https://gso-gsgo.ge/fotPatients/CAPOX.pdf'
    },

    {
        title: 'კაპეციტაბინი -Capecitabine',
        cover: `${capecitabine}`,
        link: 'https://gso-gsgo.ge/fotPatients/Capecitabine.pdf'
    },

    {
        title: 'გაეცანით მითებს ონკოლოგიურ დაავადებებზე და კიბოს პრევენციის მეთოდებს',
        cover: `${myths}`,
        link: 'https://oncolo.ge/2020/12/01/მითები-ონკოლოგიური-დაავა/'
    },

    {
        title: 'ზრუნვა ემოციურ ჯანრთელობაზე',
        cover: `${care}`,
        link: 'https://gso-gsgo.ge/fotPatients/ზრუნვა ემოციურ ჯანრთელობაზე.pdf'
    },

    {
        title: 'კვება',
        cover: `${feeding}`,
        link: 'https://gso-gsgo.ge/fotPatients/კვება.pdf'
    },

    {
        title: 'პრაქტიკული სახლემძღვანელო მეტი მოძრაობისთვის',
        cover: `${practicalHandbook}`,
        link: 'https://gso-gsgo.ge/fotPatients/პრაქტიკული სახლემძღვანელო მეტი მოძრაობისთვის.pdf'
    }
]