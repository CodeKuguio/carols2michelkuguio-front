import { createGlobalStyle } from 'styled-components'
import {device} from "./App.theme.ts";

export const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
       v2.0 | 20110126
       License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        font-family: "Montserrat", "Open Sans", "Raleway", serif;
        font-optical-sizing: auto;
        font-weight: 300;
        font-style: normal;
        margin: 0;
    }

    html {
        font-size: 62.5%; /* Now 10px = 1rem! */
        @media ${device.mobile} {
            font-size: 55.5%;
        }
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    p {
        text-wrap: pretty;
    }

    h1, h2, h3, h4, h5, h6 {
        text-wrap: balance;
    }

    html, body {
        display: block;
        width: 100%;
        height: 100%;
    }

    .lg-container {
        --lg-theme-color: #a0715e;
        --lg-icon-color: #fff;
        --lg-icon-hover-color: #fff;
    }
    .lg-container .lg-progress { background-color: #a0715e; }
    .lg-container .lg-progress-bar { background-color: rgba(255,255,255,0.25); }
    .lg-container .lg-autoplay-button .lg-progress {
        stroke: #a0715e;
        stroke-width: 3px;
    }

    .lg-container .lg-thumb-item {
        border-color: transparent;
        transition: border-color .2s ease;
        border-width: 2px;
        border-radius: 4px;
    }
    .lg-container .lg-thumb-item:hover,
    .lg-container .lg-thumb-item:focus {
        border-color: #a0715e;
    }
    .lg-container .lg-thumb-item.active {
        border-color: #a0715e;
    }
    .lg-container .lg-thumb-item:hover img,
    .lg-container .lg-thumb-item.active img {
        filter: brightness(0.9);
    }
    .lg-container .lg-thumb-item img {
        filter: grayscale(70%) brightness(0.75);
        transition: filter 0.2s ease;
    }
    .lg-container .lg-thumb-item.active img {
        filter: none;
    }
    .lg-container .lg-thumb-item:hover img,
    .lg-container .lg-thumb-item:focus img {
        filter: grayscale(30%) brightness(0.9);
    }


    #root {
        view-transition-name: root;
        isolation: isolate;
        min-height: 100vh;
        width: 100%;
    }`
