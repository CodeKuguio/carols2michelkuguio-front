import styled from 'styled-components';
import flower from '../../assets/flower-large.svg'
import {CardProps, WrapperCardProps} from "./checkout.types.tsx";
import {device} from "../../App.theme.ts";


export const Container = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: justify;
    align-items: center;

    
`

export const WrapperCard = styled.section<WrapperCardProps>`
    display: flex;
    flex-direction: row;
    text-align: justify;
    align-items: center;
    justify-content: center;
    position: relative;
    flex: 1;

    &::before {
        content: "";
        width: 400px;
        height: 400px;
        position: absolute;
        z-index: -1;
        background-position: center center;
        background-image: url(${flower});
        clip-path: inset(0 0 0 0);
        background-repeat: no-repeat;
        background-size: contain;
        top: -75px;
        left: -170px;
        transform: scaleX(-1) rotate(102deg);
    }

    &::after {
        content: "";
        width: 400px;
        height: 400px;
        position: absolute;
        z-index: -1;
        background-position: center center;
        background-image: url(${flower});
        clip-path: inset(0 0 0 0);
        background-repeat: no-repeat;
        background-size: contain;
        right: -170px !important;
        bottom: -75px !important;
        left: auto;
        top: auto;
        transform: scaleX(-1) rotate(285deg);
    }
`
export const HorizontMarging = styled.div`
    --vertical-offset: calc(var(--offset) * -1);
    border-top: var(--border-size) solid currentcolor;
    border-bottom: var(--border-size) solid currentcolor;
    top: calc(var(--border-size) * -1) !important;;
    bottom: calc(var(--border-size) * -1) !important;;
    border-top-color: ${props => props.theme.colors.borderColor};
    border-bottom-color: ${props => props.theme.colors.borderColor};

    &::before {
        top: calc(var(--vertical-offset) - var(--border-size));
        bottom: calc(var(--vertical-offset) - var(--border-size));
        left: calc(var(--offset) - var(--border-size));
        right: calc(var(--offset) - var(--border-size));
    }
`
export const VerticalMarging = styled.div`
    --horizontal-offset: calc(var(--offset) * -1);
    border-left: var(--border-size) solid currentcolor;
    border-right: var(--border-size) solid currentcolor;
    right: calc(var(--border-size) * -1) !important;
    left: calc(var(--border-size) * -1) !important;;
    border-left-color: ${props => props.theme.colors.borderColor};
    border-right-color: ${props => props.theme.colors.borderColor};

    &::before {
        top: calc(var(--offset) - var(--border-size));
        bottom: calc(var(--offset) - var(--border-size));
        left: calc(var(--horizontal-offset) - var(--border-size));
        right: calc(var(--horizontal-offset) - var(--border-size))
    }

`
export const Card = styled.div<CardProps>`
    padding: 3rem;
    border: 36px solid transparent;
    --offset: 12px;
    --border-size: 1px;
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1100px;
    background-color: rgb(255, 255, 255);
    -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
    -moz-box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);

    ${HorizontMarging}, ${VerticalMarging} {
        position: absolute;
        top: var(--horizontal-offset, 0);
        right: var(--vertical-offset, 0);
        bottom: var(--horizontal-offset, 0);
        left: var(--vertical-offset, 0);
        transition: transform .8s ease;
        will-change: transform;
        z-index: 1;
        -khtml-opacity: 0.5;
        -moz-opacity: 0.5;
        opacity: .5;
    }

    ${HorizontMarging}::before, ${VerticalMarging}::before {
        content: "";
        position: absolute;
        border: inherit;
        box-sizing: border-box;
    }

    @media ${device.tablet} {
        max-width: 100%;
        border: 30px solid transparent;
    }

`
export const Wrapper = styled.div`
    height: auto;
    max-width:100vw;
    overflow: hidden;
    padding:  94px 70px 300px 70px;
    @media ${device.tablet} {
        max-width: 100%;
        padding:  94px 40px 94px 40px;
    }
`
interface ButtonProps {
    invert?: boolean;
}
export const Button = styled.button<ButtonProps>`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: ${props =>props.invert? props.theme.colors.colorWhite: props.theme.colors.borderColor};
    color: ${props =>props.invert? props.theme.colors.titleColor: props.theme.colors.colorWhite};
    font-weight: 400;
    border: solid 1px ${props =>props.invert? props.theme.colors.borderColor: props.theme.colors.titleColor};
    border-radius: 3px;
    cursor: pointer;
    &:hover{
        background: ${props =>props.invert? '#f4f4f4': '#a0715e'};
    }
`
export const Search = styled.div`
    height: 50px;
    border-radius: ${props => props.theme.measures.borderMaxRadius};
    display: flex;
    input{
        border: solid 1px #f0f0f0;
        border-bottom-left-radius: ${props => props.theme.measures.borderMaxRadius};
        border-top-left-radius: ${props => props.theme.measures.borderMaxRadius};
        flex: 1;
        padding: 10px 20px;
        &:active, &:focus{
            outline: none;
            border: ${props => `solid 1px ${props.theme.colors.titleColor}`}; 
            color: ${props => props.theme.colors.titleColor};
        }
    }
    button{
        border: ${props => `solid 1px ${props.theme.colors.titleColor}`};
        border-bottom-right-radius: ${props => props.theme.measures.borderMaxRadius};
        border-top-right-radius: ${props => props.theme.measures.borderMaxRadius};
        background-color: ${props => props.theme.colors.borderColor};
        color: ${props => props.theme.colors.colorWhite};
        padding: 10px 30px;
        &:hover{
            cursor: pointer;
            background-color: ${props => props.theme.colors.titleColor};
        }
    }
`
export const ContentCard = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: row;
    font-family: "Montserrat", "Open Sans", "Raleway", serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-size: 1.7rem;
    color: ${props => props.theme.colors.defaultColor};
    text-align: justify;
    align-items: stretch;
    width: 100%;
    gap: 2rem;

    h1 {
        font-weight: 500;
        font-style: normal;
        font-size: 3rem;
        color: ${props => props.theme.colors.titleColor};
        align-self: center;
    }
    @media ${device.mobile} {
        flex-direction: column;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        z-index: 999;

        @media ${device.laptop} {
            min-width: 300px;
        }
        @media ${device.tablet} {
            min-width: 250px;
        }
        fieldset {
            display: flex;
            flex-direction: column;
            gap: 2rem;

            label {
                display: flex;
                align-self: stretch;
                width: 100%;
                flex-direction: column;

                input, textarea {
                    background-color: #f4f4f4;
                    border: none;
                    outline: none;
                    padding: 5px 10px;
                    border-radius: 3px;
                }

                span {
                {
                    color: #df7a7a;
                }
                }
            }

        }
    }
`
export const Products = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    font-family: "Montserrat", "Open Sans", "Raleway", serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-size: 1.7rem;
    color: ${props => props.theme.colors.defaultColor};
    text-align: justify;
    align-items: stretch;
    flex: 1;
    gap: 2rem;
    .total{
        font-size: 2rem;
        font-weight: bold;
        width: 100%;
        text-align: right;
        color: ${props => props.theme.colors.titleColor};
    }
    section{
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        min-width: 400px;
        @media ${device.laptop} {
            min-width: 300px;
        }
        @media ${device.tablet} {
            min-width: 250px;
        }
        max-height: 352px;
        overflow-y: scroll;
        border-bottom: 1px solid #f0f0f0;
    }
    
`
export const Product = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: row;
    font-family: "Montserrat", "Open Sans", "Raleway", serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-size: 1.7rem;
    color: ${props => props.theme.colors.defaultColor};
    text-align: justify;

    width: 100%;
    gap: 2rem;
    padding: 20px 0;
    border-bottom: 1px solid #f0f0f0;
   align-items: center;
    &:last-child{
        border-bottom: none;
    }
    img{
        width: 50px;
        height: auto;
        aspect-ratio: 3/4;
        object-fit: cover;        
    }
    .content{
        display: flex;
        flex-direction: column;
        strong{
            font-weight: bold;
            color: ${props => props.theme.colors.titleColor};
        }
    }
    
`


