import styled from "styled-components";

export const FooterWrapper = styled.footer`
    font-family: "Montserrat", "Open Sans", "Raleway", serif;
    display: flex;
    width: 100%;
    min-height: 200px;
    //background-color: #815646;
    vertical-align: center;
    justify-content: center;
    background-color: #f4f4f4;
`
export const Wrapper = styled.div`
    max-width: 1200px;
    padding: 20px;

    h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        font-size: 1.4rem;
        margin-bottom: 20px;
        &::after, &::before {
            content: " ";
            display: block;
            height: 1px;
            width: 45%;
            background-color: #CFCFCF;
        }
    }

    section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        gap: 16px;
        padding-top: 20px;

        article {
            padding: 20px;
            display: flex;
            flex-direction: column;
            background-color: #FFF;
            aspect-ratio: 16 / 9;
            align-items: center;
            justify-content: center;
            position: relative;

            /* A mágica acontece aqui:
               Calculamos a largura subtraindo o gap para que os itens 
               caibam perfeitamente na linha.
            */
            
            // Desktop: 4 itens por linha (100% / 4 = 25%)
            flex: 1 1 calc(25% - 16px); 
            max-width: calc(25% - 12px);

            @media (max-width: 992px) {
                // Tablet: 2 itens por linha (100% / 2 = 50%)
                flex: 1 1 calc(50% - 16px);
                max-width: calc(50% - 8px);
            }

            @media (max-width: 600px) {
                // Mobile: 1 item por linha
                flex: 1 1 100%;
                max-width: 100%;
            }

            h3 {
                position: absolute;
                left: 0px;
                top: -20px;
            }

            & .logoAndre {
                width: auto;
                height: 60px;
            }

            & .logolucas {
                width: 100%;
                height: auto;
            }

            & .logo {
                text-transform: uppercase;
                font-size: 1.4rem;
                font-weight: 600;
            }

        }
    }

`
