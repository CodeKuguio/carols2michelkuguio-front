import {MobileHeader, NavBar, WrapperIcon, WrapperNavBar} from "./header.styles.tsx";
import {useCallback, useEffect, useState} from "react";
import {Link} from "react-router";
import {IoIosClose, IoIosMenu} from "react-icons/io";
import {useReadyStore} from "../../ready.store.ts";
interface NavigationHeaderProps {
    hasCart?:boolean;
}
export const NavigationHeader = (props:NavigationHeaderProps) => {


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
        makeHeaderReady();
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
        <WrapperNavBar hasCart={props.hasCart} >
            <MobileHeader><WrapperIcon  onClick={changeOpen}>{isOpen ? (<IoIosClose/>) : (
                <IoIosMenu/>)}</WrapperIcon></MobileHeader>
            <NavBar  isOpen={isOpen}>
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

    );
};
