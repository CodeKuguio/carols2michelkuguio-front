import {FooterWrapper, Wrapper} from "./index.style.tsx";
import LogoAndreRomeiro from '../../assets/LOGO-ANDRE-ROMEIRO.png'
import LogoLucasKuguio from '../../assets/foto-do-logo-preto-1024x291.png'

export const Footer = () => {
    return (
        <FooterWrapper>
            <Wrapper>
                <section>
                    <a href={'https://www.instagram.com/villavieventos'} aria-label="link do instagram Villaví Eventos"  target="_blank" rel="noopener noreferrer">
                        <span className={'logo'}>Villaví Eventos</span>
                    </a>
                    <a href={'https://www.instagram.com/andreromeiro1'} aria-label="link do instagram André Romeiro"  target="_blank" rel="noopener noreferrer">
                        <img src={LogoAndreRomeiro} alt="Logo André Romeiro" className="logoAndre"/>
                    </a>
                    <a href={'https://lucaskuguio.com.br'} aria-label="link do site Lucas Kuguio" target="_blank" rel="noopener noreferrer">
                        <img src={LogoLucasKuguio} alt="Logo Lucas Kuguio" className="logolucas"/>
                    </a>
                    <a href={'https://www.giulianosilveira.com'} aria-label="link do site Giuliano Silveira"  target="_blank" rel="noopener noreferrer">
                        <span className={'logo'}>Giuliano Silveira</span>
                    </a>
                </section>
            </Wrapper>
        </FooterWrapper>
    )
}
