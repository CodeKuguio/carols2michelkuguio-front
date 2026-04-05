import {Header} from './components/Header'
import {AboutUs} from "./components/AboutUs";
import {SubHeader} from "./components/SubHeader";
import TimeLine from "./components/TimeLine";
import {Footer} from "./components/Footer";

function App() {

    return (
            <>
                <Header></Header>
                <AboutUs />
                <SubHeader title={'Nossa Historia'} id={'nossa-historia'} invert={false}/>
                <TimeLine />
                <Footer />
            </>
    )
}

export default App
