import styles from '../../css/Home.module.scss';

export default function Education() {
    return (
        <section
            id="about"
            className={`${styles.school} flex min-h-screen flex-col bg-[#BC707A] lg:flex-row`}
        >
            <div className="flex w-full flex-col justify-center gap-5 px-8 py-20 md:px-16 lg:w-1/2">
                <span className={styles.sectionNumberLight}>03</span>

                <h2>Over the years,</h2>

                <p>
                    I have gained work experience as a programmer and
                    developed a strong foundation in software development.
                    I graduated from{' '}
                    <a href="#">
                        Vidzeme Technology and Design Vocational School
                    </a>{' '}
                    as a programmer with excellent results.
                </p>

                <p>
                    During my studies, I worked with PHP, C++, MySQL, React,
                    Laravel and several other technologies, developing
                    practical skills through various projects and assignments.
                </p>

                <p>
                    My work experience has strengthened my ability to work
                    responsibly, pay attention to detail and collaborate
                    effectively as part of a team.
                </p>
            </div>

            <div className="flex min-h-[400px] w-full items-center justify-center p-8 lg:min-h-screen lg:w-1/2">
                <img
                    src="/images/vtdt.jpg"
                    alt="Vidzeme Technology and Design Vocational School"
                    className="w-full max-w-[700px] shadow-xl"
                />
            </div>
        </section>
    );
}