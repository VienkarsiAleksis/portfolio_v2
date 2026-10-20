import Navbar from '../Components/Navbar';
import styles from '../../css/Home.module.scss';
import { MdOutlineScreenshotMonitor } from "react-icons/md";

const projects = [
    {
        id: 'chickching',
        title: 'ChickChing.lv',
        label: 'Project 01',
        description: 'Qualification thesis project - a modern auto parts price comparison website for the Latvian market.',
        fullDescription: 'Kvalifikācijas darba ietvaros izstrādāju tīmekļa vietni ChikChing.lv, kas ļauj lietotājiem ātri un ērti salīdzināt auto detaļu cenas dažādos Latvijas interneta veikalos. Vietnē tika izveidota preču filtrēšanas sistēma, lietotāju reģistrācija un pieteikšanās, iespēja saglabāt preces un rediģēt lietotāja profilu. Lai automatizēti iegūtu informāciju par precēm un to cenām no dažādiem interneta veikaliem, tika izmantota tīmekļa skrāpēšana (web scraping), izmantojot Puppeteer. Projekta mērķis bija izveidot ērtu un efektīvu risinājumu, kas palīdz lietotājiem atrast nepieciešamās auto detaļas un salīdzināt to cenas vienuviet.',
        images: ['/images/ChickChing.lv.png'],
        docLabel: 'Documentation',
        docName: 'Ošiņš_Aleksis_IPb21-KVD',
        docLink: '/files/Ošiņš_Aleksis_IPb21-KVD.pdf',
        gitLabel: 'GitHub',
        gitLink: 'https://github.com/VienkarsiAleksis/auto-parts.git',
        tech: ['Laravel', 'React', 'Inertia', 'MySQL', 'Vite', 'Puppeteer', 'Tailwind', 'SCSS', 'JavaScript', 'PHP']
    },
    {
        id: 'Portfolio',
        title: 'Portfolio',
        label: 'Project 02',
        description: 'A clean personal portfolio built to highlight projects, services, and contact information in a modern website experience.',
        fullDescription: 'Personīgā portfolio tīmekļa vietne, kas izveidota, lai vienuviet prezentētu savus projektus, tehniskās prasmes un līdzšinējo pieredzi programmēšanā. Vietne sniedz pārskatāmu ieskatu par mani, kā arī ļauj ērti iepazīties ar katru projektu un tā izstrādes mērķi.',
        images: ['/images/portfolio.png'],
        gitLabel: 'GitHub',
        gitLink: 'https://github.com/VienkarsiAleksis/portfolio_v2',
        tech: ['Inertia', 'React', 'Laravel', 'Tailwind', 'SCSS', 'Vite']
    },
    {
        id: 'Wedding',
        title: 'Wedding invitation',
        label: 'Project 03',
        description: 'A digital wedding invitation website with essential event details',
        fullDescription: 'Izstrādāju kāzu ielūguma tīmekļa vietni, kuras mērķis ir samazināt ar tradicionālajiem papīra ielūgumiem saistītās izmaksas un laiku, kas nepieciešams to izsūtīšanai. Vietne nodrošinās viesiem ērtu piekļuvi svarīgākajai informācijai par kāzu norisi, pasākuma datumu, laiku un norises vietu. Ir izveidota iespēja ar vienu klikšķi pievienot kāzu datumu personīgajam kalendāram.',
        images: ['/images/wedd1.png', '/images/wedd2.png'],
        gitLabel: 'GitHub',
        gitLink: 'https://github.com/VienkarsiAleksis/wedding',
        tech: ['React', 'Tailwind', 'SCSS']
    },
    {
        id: 'Mind`f`er',
        title: 'Mind`f`er',
        label: 'Project 04',
        description: 'Memory game on webiste, where players match pairs of cards with identical images, testing their memory and concentration skills.',
        fullDescription: 'Atmiņas spēle ir interaktīva tīmekļa lietotne, kurā spēlētājiem jāatrod un jāsavieno vienādu emocijzīmju pāri, apgriežot spēles laukā izvietotās kartītes. Spēle sastāv no 20 līmeņiem, kuros kartīšu izkārtojums tiek ģenerēts nejauši katras spēles sākumā, nodrošinot daudzveidīgu spēles pieredzi. Katram līmenim ir noteikts laika ierobežojums, kura laikā spēlētājam jāatrod visi kartīšu pāri. Spēles laikā tiek uzskaitīts pavadītais laiks, mēģinājumu skaits un nopelnītās monētas. Punktu skaits ir atkarīgs no spēlētāja ātruma — par katru atrasto pāri tiek piešķirti punkti, kuru vērtība samazinās, spēles taimerim skaitot atlikušo laiku. Pēc līmeņa pabeigšanas spēlētājam tiek parādīta līmeņa rezultātu tabula (leaderboard), kurā iespējams salīdzināt rezultātus ar citiem spēlētājiem. Katram spēlētājam tiek saglabāts labākais sasniegtais rezultāts, un, sasniedzot augstāku rezultātu, iepriekšējais rezultāts tiek atjaunināts. Lietotnē ir pieejama reģistrēšanās un pierakstīšanās, kā arī lietotāja profila pārvaldība. Spēlētāji var mainīt paroli un pielāgot spēles vizuālo noformējumu, izmantojot veikalā par nopelnītajām monētām iegādātās fona tēmas.',
        images: ['/images/mind.png', '/images/mind1.png', '/images/mind2.png'],
        gitLabel: 'GitHub',
        gitLink: 'https://github.com/VienkarsiAleksis/memoryGame',
        tech: ['React', 'Laravel', 'MySql', 'SCSS']
    },
    {
        id: 'Streamify',
        title: 'Streamify',
        label: 'Project 05',
        description: 'A scalable digital service concept for managing offers, onboarding details, and streamlined client communication.',
        fullDescription: 'Streamify ir mūzikas straumēšanas aplikācija, ko kopā ar draugu iesākām izstrādāt, iedvesmojoties no Musi — mūsu iecienītās bezmaksas mūzikas atskaņošanas aplikācijas. Pēc Musi izņemšanas no App Store radās ideja izveidot līdzīgu alternatīvu, izmantojot SoundCloud API, jo piekļuve YouTube API bija sarežģītāka. Aplikācija ļauj meklēt dziesmas, izpildītājus un atskaņošanas sarakstus, saglabāt iecienītākās dziesmas un veidot personīgos atskaņošanas sarakstus. Mūziku iespējams atskaņot gan ierastajā secībā, gan jauktā režīmā. Projekta mērķis bija radīt ērtu un lietotājam draudzīgu mūzikas klausīšanās pieredzi iOS ierīcēs, vienlaikus praktiski apgūstot mobilo lietotņu izstrādi un ārējo API integrāciju.',
        images: ['/images/streamify.png', '/images/streamify1.png'],
        gitLabel: 'GitHub',
        gitLink: 'https://github.com/KkarliskK/Streamify',
        tech: ['React Native', 'API', 'EXPO']
    },
    {
        id: 'Gripstreet',
        title: 'Gripstreet',
        label: 'Project 06',
        description: 'An informational website for the Gripstreet car club, designed to showcase the club and its activities.',
        fullDescription: 'Projekta ietvaros tika uzsākta informatīvas tīmekļa vietnes izstrāde auto klubam Gripstreet. Vietnes mērķis bija izveidot vienkāršu un pārskatāmu platformu, kurā apmeklētāji varētu iepazīties ar auto klubu, tā darbību un citu būtisku informāciju. Projekts tika izstrādāts atbilstoši klienta sākotnējām vajadzībām, taču klienta prioritāšu maiņas dēļ tā izstrāde netika pabeigta.',
        images: ['/images/gripstreet.png'],
        gitLabel: 'GitHub',
        gitLink: 'https://github.com/KkarliskK/gripstreet',
        tech: ['React', 'Tailwind', 'SCSS']
    }
];

export default function Projects() {
    const scrollToProject = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const getProjectImages = (project) => project.images?.length ? project.images : project.image ? [project.image] : [];

    return (
        <>
            <Navbar />

            <div className="relative min-h-screen bg-[#f5f5f3] pt-6">
                <nav className="fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-2 rounded-2xl border border-[#e7e5e4] bg-white/80 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl xl:flex">
                    <p className={`${styles.sectionNumber} px-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-gray-500`}>Projects</p>
                    {projects.map((project) => (
                        <button
                            key={project.id}
                            type="button"
                            onClick={() => scrollToProject(project.id)}
                            className="rounded-xl border border-transparent px-3 py-2 text-left text-sm font-medium text-gray-700 transition-all duration-200 hover:border-[#f1d5d9] hover:bg-[#fff7f8] hover:text-[#bc707a]"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            {project.label}
                        </button>
                    ))}
                </nav>

                <main className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 pb-10 md:px-8 xl:pl-56">
                    {projects.map((project, index) => (
                        <section
                            key={project.id}
                            id={project.id}
                            className="sector scroll-mt-28 w-full max-w-5xl rounded-[28px] border border-[#eceae7] bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] md:p-8"
                        >
                            <div className="title">
                                <span className={`${styles.sectionNumber} mb-2 block text-[11px]`}>
                                    {project.label}
                                </span>
                                <h1 className={`${styles.name} text-3xl font-bold tracking-tight text-[#171717] md:text-5xl`}>
                                    {project.title}
                                </h1>
                                <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700 md:text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    {project.description}
                                </p>
                            </div>

                            <div className="image mt-6 flex flex-col rounded-2xl border border-[#eceae7] bg-[#f9f9f8] p-4">
                                <div className="flex flex-row items-center justify-between gap-2">
                                    <p className="text-sm font-medium text-gray-700 md:text-base">Website preview</p>
                                    <div className="flex items-center gap-2 rounded-xl border border-[#e5e7eb] bg-[#f3f4f6] px-3 py-1.5 text-gray-700 shadow-sm">
                                        <MdOutlineScreenshotMonitor color="gray" />
                                        <p className="text-sm md:text-base">{getProjectImages(project).length > 1 ? 'Screenshots' : 'Screenshot'}</p>
                                    </div>
                                </div>

                                <div className={`img mt-4 ${getProjectImages(project).length > 1 ? 'grid gap-4 md:grid-cols-2' : ''}`}>
                                    {getProjectImages(project).map((image, imageIndex) => (
                                        <div
                                            key={`${project.id}-image-${imageIndex}`}
                                            className={`overflow-hidden rounded-xl border border-[#eceae7] bg-white ${getProjectImages(project).length > 1 ? 'shadow-sm' : ''}`}
                                        >
                                            <img
                                                src={image}
                                                alt={`${project.title} preview ${imageIndex + 1}`}
                                                className="h-auto w-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="desc mt-6 flex flex-col rounded-2xl border border-[#eceae7] bg-[#fcfcfb] p-5 md:p-6">
                                <h2 className={`${styles.dev} text-2xl font-bold text-[#171717] md:text-3xl`} style={{ fontFamily: 'Titillium Web, sans-serif' }}>Description</h2>
                                <p className="mt-3 text-base leading-7 text-gray-700 md:text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>{project.fullDescription}</p>
                            </div>

                            <div className="resources mt-6 flex flex-col rounded-2xl border border-[#eceae7] bg-[#fcfcfb] p-5 md:p-6">
                                <h2 className={`${styles.dev} text-2xl font-bold text-[#171717] md:text-3xl`} style={{ fontFamily: 'Titillium Web, sans-serif' }}>Resources</h2>
                                <div className="mt-4 grid gap-5 md:grid-cols-2">
                                    {project.docLabel && project.docName && project.docLink && (
                                        <div className="doc rounded-xl bg-white p-4 shadow-sm ring-1 ring-[#f1f1ef]">
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">{project.docLabel}</p>
                                            <a href={project.docLink} download className="mt-3 inline-block text-base text-[#bc707a] underline decoration-[#f0c8cd] underline-offset-4">
                                                {project.docName}
                                            </a>
                                        </div>
                                    )}
                                    <div className="git rounded-xl bg-white p-4 shadow-sm ring-1 ring-[#f1f1ef]">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">{project.gitLabel}</p>
                                        <a
                                            href={project.gitLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-3 inline-block break-all text-base text-[#bc707a] underline decoration-[#f0c8cd] underline-offset-4"
                                        >
                                            {project.gitLink}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="teh mt-6 flex flex-col rounded-2xl border border-[#eceae7] bg-[#fcfcfb] p-5 md:p-6">
                                <h2 className={`${styles.dev} text-2xl font-bold text-[#171717] md:text-3xl`} style={{ fontFamily: 'Titillium Web, sans-serif' }}>Used Technologies</h2>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-[#eceae7] bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm"
                                            style={{ fontFamily: 'Inter, sans-serif' }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {index < projects.length - 1 && <div className="mt-8 h-px w-full bg-[#f0efee]" />}
                        </section>
                    ))}
                    <div className="sor flex items-center justify-center text-center">
                        <h1 className="mt-4 max-w-3xl text-base leading-7 text-gray-700 md:text-lg">
                            There was more projects, but they are lost, sorry :(
                        </h1>
                    </div>
                </main>
            </div>
        </>
    );
}

//chickching.lv
//portfolio-v2
//wedding
//streamify
//news
//gripstreet
// Es veidoju vieglus un modernus dizainus, kas sniedz viegli parskatāmu mājaslapu pieredzi, izbaudamību lietotjot to, kā arī acim patiku klientiem. Pieversu uzmanību detaļām, tekstam, teksta dizainam, izkartojumam. Vienmēr iekļaujot mobilo versiju.