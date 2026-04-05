import {TimeLeft} from "../TimeLeft";
import {
    ContentHeader,
    HeaderText,
    HeaderWrapper, MobileHeader,
    NavBar,
    WrapperContent,
    WrapperIcon,
    WrapperNavBar
} from "./header.styles.tsx";
import {useCallback, useEffect, useState} from "react";
import {Link} from "react-router";
import {IoIosMenu, IoIosClose} from "react-icons/io";
import minhaFoto from '../../assets/groom-putting-ring-bride-s-finger.jpg'
import {useReadyStore} from "../../ready.store.ts";
export const Header = () => {
    const targetDate = "2025-09-27T17:00:00Z";
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const changeOpen = () => setIsOpen(current => !current);
    const {makeHeaderReady} = useReadyStore();
    const sections = [
        "home",
        "quem-somos",
        "nossa-historia",
        "galeria",
        "confirmacao",
        "presenteie-os-noivos",
        "local",
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        makeHeaderReady();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [makeHeaderReady]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        setActiveSection(sectionId);
                        window.history.replaceState(null, "", `${sectionId}`);
                    }
                });
            },
            {
                root: null,
                threshold: 0.1,
                rootMargin: "-100px 0px -300px 0px",
            }
        );

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [sections]);

    const activeClass = useCallback((baseAction: string) => {
        return {
            className:  activeSection === baseAction ? "active" : ""
        }
    },[activeSection])

    return (

        <HeaderWrapper id={'home'} open={isOpen}  layers={[
            {
                image: minhaFoto,
                speed: -30,
            },
        ]}>
            <WrapperNavBar isScrolled={isScrolled}>
                <MobileHeader><WrapperIcon isScrolled={isScrolled} onClick={changeOpen}>{isOpen ? (<IoIosClose/>) : (
                    <IoIosMenu/>)}</WrapperIcon></MobileHeader>
                <NavBar isScrolled={isScrolled} isOpen={isOpen}>
                    <ul>
                        <li {...activeClass("home")}>
                            <Link to="/">Home</Link>
                        </li>
                        <li {...activeClass("quem-somos")}>
                            <Link to="/quem-somos">Quem Somos</Link>
                        </li>
                        <li {...activeClass("nossa-historia")}>
                            <Link to="/nossa-historia">Nossa História</Link>
                        </li>
                        <li {...activeClass("galeria")}>
                            <Link to="/galeria">Galeria</Link>
                        </li>
                        <li {...activeClass("confirmacao")}>
                            <Link to="/confirmacao">Confirmação</Link>
                        </li>
                        <li {...activeClass("presenteie-os-noivos")}>
                            <Link to="/presenteie-os-noivos">Presenteie os Noivos</Link> {/* Carrinho separado */}
                        </li>
                    </ul>
                </NavBar>

            </WrapperNavBar>
            <ContentHeader>
                <WrapperContent>
                    <HeaderText>
                        <strong>Carol</strong>
                        <span>&</span>
                        <strong>Michel</strong>
                    </HeaderText>
                </WrapperContent>
            </ContentHeader>
            <TimeLeft targetDate={targetDate}/>
        </HeaderWrapper>

    );
};
