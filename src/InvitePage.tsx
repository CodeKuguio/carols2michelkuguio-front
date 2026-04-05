import {NavigationHeader} from './components/NavigationHeader'
import {Invite} from "./components/Invite";
import {FirstSubHeader} from "./components/FirstSubHeader";
import {Footer} from "./components/Footer";

function InvitePage() {

    return (
            <>
                <NavigationHeader></NavigationHeader>
                <FirstSubHeader title={'Confirmação'} id={'confirmacao'} invert={true}/>
                <Invite/>
                <Footer/>
            </>
    )
}

export default InvitePage
