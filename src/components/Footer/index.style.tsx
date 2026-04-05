import styled from "styled-components";

export const FooterWrapper = styled.footer`
    font-family: "Montserrat", "Open Sans", "Raleway", serif;
    display: flex;
    width: 100%;
    height: 200px;
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
        flex: 1;
        width: 100%;
        gap: 16px;
        padding-top: 20px;

        article {
            padding: 20px;
            display: flex;
            flex-direction: column;
            background-color: #FFF;
            aspect-ratio: 16 / 9;
            width: 200px;
            height: auto;
            align-items: center;
            justify-content: center;
            position: relative;

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
