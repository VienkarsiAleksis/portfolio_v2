import styles from '../../css/Home.module.scss';
import Wave from '../Components/Waves';

export default function Hero() {
    return (
        <section
            id="home"
            className="intro relative flex min-h-[calc(100vh-90px)] flex-col overflow-hidden rounded-t-[60px] bg-[#e7e4e4] lg:flex-row lg:rounded-t-[100px]"
        >
            <div className="picture flex min-h-[500px] w-full items-end justify-center lg:min-h-0 lg:w-1/2 ">
                <img
                    src="/images/me.png"
                    alt="Aleksis Ošiņš"
                    className="h-auto max-h-[600px] w-[80%] object-contain"
                />
            </div>

            <div className="text flex w-full items-center justify-center px-8 py-16 lg:w-1/2 lg:px-0">
                <div className="w-full max-w-[700px]">
                    <h1 className={`${styles.name} m-0`}>
                        Hi, I’m <span>Aleksis Ošiņš.</span>
                    </h1>

                    <h2 className={`${styles.dev} mt-[-10px]`}>
                        Full-stack developer.
                    </h2>

                    <p className={`${styles.devText} mt-6 max-w-[650px]`}>
                        I'm a motivated Programming Technician with a strong
                        work ethic and a passion for learning. I adapt quickly,
                        communicate well, and work effectively.
                    </p>

                    <div className="mt-8 flex gap-5">
                        <SocialLink
                            href="https://instagram.com/"
                            image="/images/insta.png"
                            label="Instagram"
                        />

                        <SocialLink
                            href="https://facebook.com/"
                            image="/images/face.png"
                            label="Facebook"
                        />

                        <SocialLink
                            href="https://github.com/"
                            image="/images/git.png"
                            label="GitHub"
                        />
                    </div>
                </div>
            </div>
            <Wave
                color="#F5F5F3"
                position="bottom"
            />
        </section>
    );
}

function SocialLink({ href, image, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="transition-transform duration-200 hover:-translate-y-1"
        >
            <img
                src={image}
                alt=""
                className="h-[45px] w-[45px] object-contain"
            />
        </a>
    );
}