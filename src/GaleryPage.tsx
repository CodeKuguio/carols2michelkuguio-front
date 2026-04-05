import {NavigationHeader} from './components/NavigationHeader'

import {FirstSubHeader} from "./components/FirstSubHeader";
import Gallery from "./components/Galery";
import {Footer} from "./components/Footer";

function GaleryPage() {

    return (
            <>
                <NavigationHeader></NavigationHeader>
                <FirstSubHeader title={'Galeria'} id={'galeria'} invert={true}/>
                <Gallery />
                <Footer/>
            </>
    )
}

export default GaleryPage
