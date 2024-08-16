import { useState, useEffect } from "react";

export default function Header() {
    const [active, setActive] = useState(false);
    const [currentSection, setCurrentSection] = useState('home');

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            const fixNav = header.offsetTop;

            if (window.pageYOffset > fixNav) {
                setActive(true);
            } else {
                setActive(false);
            }

            const sections = ['home', 'team', 'activity', 'test'];
            let foundSection = 'home';

            for (const section of sections) {
                const element = document.getElementById(section);
                const rect = element.getBoundingClientRect();
                if (rect.top <= 50 && rect.bottom >= 50) {
                    foundSection = section;
                    break;
                }
            }

            setCurrentSection(foundSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${active ? "navbar-fixed" : ""} absolute top-0 left-0 z-10 flex items-center w-full bg-transparent`}>
            <div className="container">
                <div className="relative flex items-center justify-between">
                    <Logo scrollToSection={scrollToSection} />
                    <NavBar scrollToSection={scrollToSection} currentSection={currentSection} />
                </div>
            </div>
        </header>
    );
}

function Logo({ scrollToSection }) {
    return (
        <div className="px-4">
            <a href="#home"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                }}
                className="block py-6 text-lg font-bold text-rose-600 font-monst">Karang Taruna</a>
        </div>
    );
}

function NavBar({ scrollToSection, currentSection }) {
    const [toggleNavbar, setToggleNavbar] = useState(false);

    return (
        <div className="flex items-center px-4">
            <button name="hamburger" type="button" className={`absolute block cursor-pointer right-4 lg:hidden ${toggleNavbar ? 'hamburger-active' : ''}`} onClick={() => setToggleNavbar(toggleNavbar ? false : true)}>
                <span className="transition duration-300 ease-in-out origin-top-left hamburger-line"></span>
                <span className="transition duration-300 ease-in-out hamburger-line"></span>
                <span className="transition duration-300 ease-in-out origin-bottom-left hamburger-line"></span>
            </button>

            <nav className={`absolute py-5 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none bg-rose-950 shadow-rose-200 ${toggleNavbar ? "block" : "hidden"}`}>
                <ul className="block lg:flex">
                    <li className="group">
                        <a href="#home"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('home');
                            }}
                            className={`flex py-1 mx-6 text-base font-medium font-poppins ${currentSection === 'home' ? 'text-rose-400' : 'text-rose-50'} group-hover:text-rose-400`}>Home</a>
                    </li>
                    <li className="group">
                        <a href="#team"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('team');
                            }}
                            className={`flex py-1 mx-6 text-base font-medium font-poppins ${currentSection === 'team' ? 'text-rose-400' : 'text-rose-50'} group-hover:text-rose-400`}>About Us</a>
                    </li>
                    <li className="group">
                        <a href="#activity"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('activity');
                            }}
                            className={`flex py-1 mx-6 text-base font-medium font-poppins ${currentSection === 'activity' ? 'text-rose-400' : 'text-rose-50'} group-hover:text-rose-400`}>Activity</a>
                    </li>
                    <li className="group">
                        <a href="#test"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('test');
                            }}
                            className={`flex py-1 mx-6 text-base font-medium font-poppins ${currentSection === 'test' ? 'text-rose-400' : 'text-rose-50'} group-hover:text-rose-400`}>Gallery</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
