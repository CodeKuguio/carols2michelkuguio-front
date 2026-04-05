import {FooterWrapper, Wrapper} from "./index.style.tsx";
import LogoAndreRomeiro from '../../assets/LOGO-ANDRE-ROMEIRO.png'
import LogoLucasKuguio from '../../assets/foto-do-logo-preto-1024x291.png'

export const Footer = () => {
    return (
        <FooterWrapper>
            <Wrapper>
                <section>
                    <article>
                        <a className={'logo'}>Villaví Eventos</a>
                    </article>
                    <article>
                        <img src={LogoAndreRomeiro} alt="Logo André Romeiro" className="logoAndre"/>
                    </article>
                    <article>
                        <img src={LogoLucasKuguio} alt="Logo Lucas Kuguio" className="logolucas"/>
                    </article>
                    <article>
                        <a className={'logo'}>Giuliano Silveira</a>
                    </article>
                </section>
            </Wrapper>
        </FooterWrapper>
    )
}
