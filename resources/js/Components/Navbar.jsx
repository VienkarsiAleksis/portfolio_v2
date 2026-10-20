import styles from '../../css/Home.module.scss';

export default function Navbar() {
    return (
        <nav className={`${styles.navbar} flex items-center px-6 py-5 md:px-16 lg:px-35`}>
            <a href="/">
                <h1>Excel</h1>
            </a>

            <div className={`${styles.options} ml-auto flex items-center gap-8 md:gap-[54px]`}>
                <a href="/projects">Projects</a>
                {/* <a href="/contact">Contacts</a> */}
            </div>
        </nav>
    );
}