import {NavigationHeader} from './components/NavigationHeader'

import {FirstSubHeader} from "./components/FirstSubHeader";
import Gallery from "./components/Galery";

function GaleryPage() {

    return (
            <>
                <NavigationHeader></NavigationHeader>
                <FirstSubHeader title={'Galeria'} id={'galeria'} invert={true}/>
                <Gallery />
            </>
    )
}

export default GaleryPage
