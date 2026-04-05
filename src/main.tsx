import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import {SmoothScroll} from "./components/SmoothScrooll.tsx";
import {ParallaxProvider} from "react-scroll-parallax";
import InvitePage from "./InvitePage.tsx";
import {ThemeProvider} from "styled-components";
import {theme} from "./App.theme.ts";
import {GlobalStyle} from "./App.styles.tsx";
import AppCart from "./components/AppCart";
import {CartProvider} from "./contexts/cart-context";
import {ProductsProvider} from "./contexts/products-context";
import {ToastContainer} from "react-toastify";
import {Lgpd} from "./Lgpd.tsx";
import {Checkout} from "./components/Checkout";
import GaleryPage from "./GaleryPage.tsx";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <ProductsProvider>
                <CartProvider>
                    <ParallaxProvider>
                        <BrowserRouter>
                            <GlobalStyle/>
                            <ToastContainer/>
                            <SmoothScroll>
                                <Routes>
                                    <Route path="/confirmacao" element={<InvitePage />}/>
                                    <Route path="/galeria" element={<GaleryPage />}/>
                                    <Route path="/checkout" element={<Checkout />}/>
                                    <Route path="/presenteie-os-noivos" element={<AppCart />}/>
                                    <Route path="/politica-de-privacidade" element={<Lgpd />}/>
                                    <Route path="/*" element={<App/>}/>
                                    <Route path="*" element={<Navigate to="/"/>}/>

                                </Routes>
                            </SmoothScroll>
                        </BrowserRouter>
                    </ParallaxProvider>
                </CartProvider>
            </ProductsProvider>
        </ThemeProvider>


    </StrictMode>,
)
