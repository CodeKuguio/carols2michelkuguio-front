import { useMemo, useReducer} from "react";
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-transitions.css';
import 'lightgallery/css/lg-video.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import 'lightgallery/scss/lg-autoplay.scss';
import 'lightgallery/scss/lg-thumbnail.scss';
import 'lightgallery/scss/lg-fullscreen.scss';
import 'lightgallery/scss/lg-transitions.scss';
import 'lightgallery/scss/lg-video.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgVideo from 'lightgallery/plugins/video';

import {ButtonFilter, Container, ContainerButtonFilter, Text, WrapperCard} from "./styles.tsx";

const filtersCategoryList = [
    {label: 'Pre-Wedding', category: 'pre-wedding'},
    {label: 'Making-Of', category: 'making-of'},
    {label: 'Trailer', category: 'trailer'},
    {label: 'Cerimonia', category: 'cerimonia'},
    {label: 'Festa', category: 'festa'},
    {label: 'Decoracao', category: 'decoracao'},
]
const filtersTypeList = [
    {label: 'Fotos', category: 'photo'},
    {label: 'Videos', category: 'video'},
]
interface StateProps {
    filtersType:string[]
    filtersCategory:string[]
}
interface ActionProps {
    type:string;
    payload:string;
}
function filtersReducer(state: StateProps, action: ActionProps): StateProps {
    if (action.type === 'changeCategory') {
        const hasItem = state.filtersCategory.includes(action.payload);
        return {
            ...state,
            filtersCategory: hasItem
                ? state.filtersCategory.filter((f) => f !== action.payload) // Remove se já existe
                : [...state.filtersCategory, action.payload],              // Adiciona se não existe
        };
    }
    if (action.type === 'changeType') {
        const hasItem = state.filtersType.includes(action.payload);
        return {
            ...state,
            filtersType: hasItem
                ? state.filtersType.filter((f) => f !== action.payload) // Remove se já existe
                : [...state.filtersType, action.payload],              // Adiciona se não existe
        };
    }
    return state; // Sempre retorne o estado atual se a action não for reconhecida
}
const images = [
    {name: 'filmagem0.jpg', type: 'video', src: '//vimeo.com/1117355921', category: 'pre-wedding'},
    {name: 'kuguio_C&K-4.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-6.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-7.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-32.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-19.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-20.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-23.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-35.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-38.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-49.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-42.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-43.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-45.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-69.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-72.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-74.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-51.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-54.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-57.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-58.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-64.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-65.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-75.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-76.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-77.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-78.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-79.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-85.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-87.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-89.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-90.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-91.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-92.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-98.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-102.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-103.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-106.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-119.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-109.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-111.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-113.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-117.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-122.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-128.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-132.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-135.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-138.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-142.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-143.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-146.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-149.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-151.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-154.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-197.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-156.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-160.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-164.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-166.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-170.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-174.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-178.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-188.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-193.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'kuguio_C&K-195.jpg', type: 'photo', category: 'pre-wedding'},
    {name: 'filmagem1.jpeg', type: 'photo', category: 'pre-wedding'},
    {name: 'filmagem2.jpeg', type: 'photo', category: 'pre-wedding'},
    {name: 'filmagem3.jpg', type: 'video', src: '//vimeo.com/1180183061', category: 'trailer'},
    {name: 'filmagem4.jpg', type: 'video', src: '//www.youtube.com/watch?v=NlSHVKor6Ss', category: 'cerimonia'},
    {name: "01-MakingOff-01.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-02.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-03.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-04.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-05.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-06.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-07.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-08.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-09.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-10.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-11.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-12.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-13.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-14.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-15.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-16.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-17.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-18.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-19.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-20.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-21.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-22.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-23.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-24.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-25.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-26.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-27.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-28.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-29.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-30.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-31.jpg", type: "photo", category: 'making-of'},
    {name: "01-MakingOff-32.jpg", type: "photo", category: 'making-of'},
    {name: "02-decoracao-01.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-02.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-03.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-04.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-05.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-06.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-07.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-08.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-09.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-10.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-11.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-12.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-13.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-14.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-15.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-16.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-17.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-18.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-19.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-20.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-21.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-22.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-23.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-24.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-25.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-26.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-27.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-28.jpg", type: "photo", category: 'decoracao'},
    {name: "02-decoracao-29.jpg", type: "photo", category: 'decoracao'},
    {name: "03-Cerimonia-01.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-02.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-03.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-04.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-05.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-06.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-07.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-08.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-09.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-10.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-11.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-12.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-13.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-14.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-15.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-16.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-17.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-18.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-19.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-20.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-21.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-22.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-23.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-24.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-25.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-26.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-27.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-28.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-29.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-30.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-31.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-32.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-33.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-34.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-35.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-36.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-37.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-38.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-39.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-40.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-41.jpg", type: "photo", category: 'cerimonia'},
    {name: "03-Cerimonia-42.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-01.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-02.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-03.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-04.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-05.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-06.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-07.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-08.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-09.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-10.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-11.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-12.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-13.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-14.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-15.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-16.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-17.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-18.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-19.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-20.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-21.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-22.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-23.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-24.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-25.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-26.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-27.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-28.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-29.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-30.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-31.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-32.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-33.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-34.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-35.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-36.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-37.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-38.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-39.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-40.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-41.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-42.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-43.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-44.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-45.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-46.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-47.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-48.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-49.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-50.jpg", type: "photo", category: 'cerimonia'},
    {name: "04-Cerimonia-51.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-01.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-02.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-03.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-04.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-05.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-06.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-07.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-08.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-09.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-10.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-11.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-12.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-13.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-14.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-15.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-16.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-17.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-18.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-19.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-20.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-21.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-22.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-23.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-24.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-25.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-26.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-27.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-28.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-29.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-30.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-31.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-32.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-33.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-34.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-35.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-36.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-37.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-38.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-39.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-40.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-41.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-42.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-43.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-44.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-45.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-46.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-47.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-48.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-49.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-50.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-51.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-52.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-53.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-54.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-55.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-56.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-57.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-58.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-59.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-60.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-61.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-62.jpg", type: "photo", category: 'cerimonia'},
    {name: "05-Cerimonia-63.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-01.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-02.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-03.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-04.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-05.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-06.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-07.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-08.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-09.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-10.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-11.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-12.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-13.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-14.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-15.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-16.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-17.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-18.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-19.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-20.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-21.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-22.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-23.jpg", type: "photo", category: 'cerimonia'},
    {name: "06-Cerimonia-24.jpg", type: "photo", category: 'cerimonia'},
    {name: "07-ensaio-01.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-02.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-03.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-04.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-05.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-06.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-07.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-08.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-09.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-10.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-11.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-12.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-13.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-14.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-15.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-16.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-17.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-18.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-19.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-20.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-21.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-22.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-23.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-24.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-25.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-26.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-27.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-28.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-29.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-30.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-31.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-32.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-33.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-34.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-35.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-36.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-37.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-38.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-39.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-40.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-41.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-42.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-43.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-44.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-45.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-46.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-47.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-48.jpg", type: "photo", category: "ensaio"},
    {name: "07-ensaio-49.jpg", type: "photo", category: "ensaio"},
    {name: 'filmagem5.jpg', type: 'video', src: '//www.youtube.com/watch?v=ZFjwqk8bXJY', category: 'festa'},
    {name: "08-entrada-01.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-02.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-03.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-04.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-05.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-06.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-07.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-08.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-09.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-10.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-11.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-12.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-13.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-14.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-15.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-16.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-17.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-18.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-19.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-20.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-21.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-22.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-23.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-24.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-25.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-26.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-27.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-28.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-29.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-30.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-31.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-32.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-33.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-34.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-35.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-36.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-37.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-38.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-39.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-40.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-41.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-42.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-43.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-44.jpg", type: "photo", category: 'festa'},
    {name: "08-entrada-45.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-01.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-02.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-03.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-04.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-05.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-06.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-07.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-08.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-09.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-10.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-11.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-12.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-13.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-14.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-15.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-16.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-17.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-18.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-19.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-20.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-21.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-22.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-23.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-24.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-25.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-26.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-27.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-28.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-29.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-30.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-31.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-32.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-33.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-34.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-35.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-36.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-37.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-38.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-39.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-40.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-41.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-42.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-43.jpg", type: "photo", category: 'festa'},
    {name: "09-danca-44.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-01.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-02.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-03.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-04.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-05.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-06.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-07.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-08.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-09.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-10.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-11.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-12.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-13.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-14.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-15.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-16.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-17.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-18.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-19.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-20.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-21.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-22.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-23.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-24.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-25.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-26.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-27.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-28.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-29.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-30.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-31.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-32.jpg", type: "photo", category: 'festa'},
    {name: "10-festa-33.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-01.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-02.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-03.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-04.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-05.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-06.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-07.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-08.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-09.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-10.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-11.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-12.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-13.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-14.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-15.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-16.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-17.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-18.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-19.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-20.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-21.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-22.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-23.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-24.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-25.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-26.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-27.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-28.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-29.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-30.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-31.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-32.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-33.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-34.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-35.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-36.jpg", type: "photo", category: 'festa'},
    {name: "11-fim-de-festa-37.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-01.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-02.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-03.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-04.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-05.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-06.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-07.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-08.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-09.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-10.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-11.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-12.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-13.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-14.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-15.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-16.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-17.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-18.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-19.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-20.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-21.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-22.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-23.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-24.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-25.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-26.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-27.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-28.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-29.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-30.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-31.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-32.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-33.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-34.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-35.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-36.jpg", type: "photo", category: 'festa'},
    {name: "12-fim-37.jpg", type: "photo", category: 'festa'},
]

export function Gallery() {
    const [state, dispatch] = useReducer(filtersReducer, { filtersType: [], filtersCategory: [] });
    const changeType =(name:string)=>()=>{
        dispatch({
            type: 'changeType',
            payload: name
        })
    }
    const changeCategory =(name:string)=>()=>{
        dispatch({
            type: 'changeCategory',
            payload: name
        })
    }
    const imagesList = useMemo(()=>{
        let data = images;
        if(state.filtersType.length>0){
            data = data.filter(i=>state.filtersType.includes(i.type))
        }
        if(state.filtersCategory.length>0){
            data = data.filter(i=>state.filtersCategory.includes(i.category))
        }
        return data
    },[state.filtersCategory, state.filtersType])

    return (
        <WrapperCard>
            <Container>
                <Text>
                    “Grandes coisas fez o Senhor por nós, e por isso estamos alegres.” – Salmos 126:3
                </Text>
                <ContainerButtonFilter>
                    {filtersTypeList.map(ft=>(
                        <ButtonFilter className={state.filtersType.includes(ft.category)?'active':''} key={ft.category} onClick={changeType(ft.category)}>{ft.label}</ButtonFilter>
                    ))}
                    {filtersCategoryList.map(fc=>(
                        <ButtonFilter className={state.filtersCategory.includes(fc.category)?'active':''} key={fc.category} onClick={changeCategory(fc.category)}>{fc.label}</ButtonFilter>
                    ))}

                </ContainerButtonFilter>

                <LightGallery
                    speed={500}
                    plugins={[lgFullscreen, lgAutoplay, lgThumbnail, lgZoom, lgVideo]}
                    mode="lg-fade"
                    pager={false}
                    thumbnail={true}
                    animateThumb={true}
                    galleryId={'nature'}
                    licenseKey={'19618204-E93C-43CE-9A60-C64B2A4D4AC2'}
                    elementClassNames={'gallery'}
                    autoplayFirstVideo={true}
                    vimeoPlayerParams={{
                        autoplay: 0,
                        muted: 0,
                        byline: 0,
                        portrait: 0,
                        title: 0,
                        badge: 0,
                        autopause: 0
                    }}
                    mobileSettings={{
                        controls: false,
                        showCloseIcon: false,
                        download: false,
                        rotate: false,
                    }}
                >

                    {imagesList.map((image, index) => {
                        if(image.type === "photo" ){
                            return (
                                <a key={index} href={`/static/galery/${image.name}`} className="gallery__item">
                                    <img className="img-responsive" alt={image.name}
                                         src={`/static/galery/thumb/${image.name}`}/>
                                </a>
                            )
                        }
                        return (
                            <a
                                key={index}
                               className="gallery__item"
                               data-src={`${image.src}`}
                               data-sub-html="<h4>Filmagem Pre Wedding</h4><p>Video by <a target='_blank' href='https://vimeo.com/giulianosilveira'>Giuliano Silveira</a></p>"
                            >
                                <img
                                    className="img-responsive"
                                    src={`/static/galery/thumb/${image.name}`}
                                />
                            </a>
                        )
                    })}

                </LightGallery>
            </Container>
        </WrapperCard>
    );
}

export default Gallery;
