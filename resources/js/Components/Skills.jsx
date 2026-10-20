import {
    FaReact,
    FaPhp,
    FaHtml5,
    FaLaravel,
    FaCss3Alt,
    FaJs,
    FaDocker
} from 'react-icons/fa';

import { RiTailwindCssFill } from "react-icons/ri";
import { SiStatamic } from "react-icons/si";
import { DiMysql } from 'react-icons/di';
import Wave from '../Components/Waves';
import styles from '../../css/Home.module.scss';

const technologies = [
    {
        name: 'React',
        icon: FaReact,
    },
    {
        name: 'JavaScript',
        icon: FaJs,
    },
    {
        name: 'PHP',
        icon: FaPhp,
    },
    {
        name: 'Laravel',
        icon: FaLaravel,
    },
    {
        name: 'HTML',
        icon: FaHtml5,
    },
    {
        name: 'CSS',
        icon: FaCss3Alt,
    },
    {
        name: 'MySQL',
        icon: DiMysql,
    },
    {
        name: 'Statamic',
        icon: SiStatamic,
    },
    {
        name: 'Docker',
        icon: FaDocker,
    },
    {
        name: 'Tailwind CSS',
        icon: RiTailwindCssFill,
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className={`${styles.style} relative flex min-h-screen flex-col lg:flex-row overflow-hidden pb-20`}
        >
            <div className={`${styles.design} flex w-full justify-center px-8 pt-20 lg:w-1/2 lg:px-0`}>
                <div className="max-w-[500px]">
                    <span className={styles.sectionNumber}>01</span>

                    <h2>DESIGN</h2>

                    <p>
                        I create clean, modern, and visually appealing website designs that deliver an intuitive, seamless, and enjoyable user experience. I focus on every detail—from typography and content to layout and visual hierarchy—to ensure each website is both aesthetically pleasing and easy to navigate.
                    </p>

                    <p className="mt-5">
                        Every design is fully responsive, ensuring a smooth and consistent experience across desktop, tablet, and mobile devices.
                    </p>
                </div>
            </div>

            <div className={`${styles.skills} flex w-full items-start justify-center px-8 pb-20 pt-20 lg:w-1/2 lg:items-end lg:px-0`}>
                <div className="max-w-[500px]">
                    <span className={styles.sectionNumber}>02</span>

                    <h2>SKILLS</h2>

                    <p>
                        I work primarily with JavaScript, PHP, Laravel and
                        React. I also have experience with databases,
                        responsive CSS and modern web development workflows.
                    </p>

                    <div className="mt-8 grid grid-cols-4 gap-6 sm:grid-cols-5">
                        {technologies.map(({ name, icon: Icon }) => (
                            <div
                                key={name}
                                className="group flex flex-col items-center gap-2"
                            >
                                <Icon
                                    size={48}
                                    className="transition-transform duration-200 group-hover:-translate-y-1"
                                />

                                <span className="text-xs text-[#737373]">
                                    {name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Wave
                color="#BC707A"
                position="bottom"
            />
        </section>
    );
}