import Main from "../core/Main";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Scrolltotop from "./scrolltotop";
import Hompage from "../component/Homepage/Hompage";
import Aboutpage from "../component/Aboutpage/Aboutpage";
import Scopepage from "../component/Scopepage/Scopepage";
import Conferencetrackspage from "../component/Conferencetrackspage/Conferencetrackspage";
import Keyinviteespage from "../component/Keyinviteespage/Keyinviteespage";
import Commiiteepage from "../component/Commiiteepage/Commiiteepage";
import Editorialpage from "../component/Editorialpage/Editorialpage";
import Keydatepage from "../component/Keydatepage/Keydatepage";
import Papersubpage from "../component/Papersubpage/Papersubpage";
import Registerpage from "../component/Registerpage/Registerpage";
import Contactpage from "../component/Contactpage/Contactpage";

export default function Approuter() {
    return (
        <BrowserRouter>
            <Scrolltotop />
            <Routes>
                <Route element={<Main />}>
                    <Route path="/" element={<Hompage />} />
                    <Route path="/about" element={<Aboutpage />} />
                    <Route path="/scope" element={<Scopepage />} />
                    <Route path="/conferenceTracks" element={<Conferencetrackspage />} />
                    {/* <Route path="/keyInvitees" element={<Keyinviteespage />} /> */}
                    <Route path="/organizingCommittee" element={<Commiiteepage />} />
                    <Route path="/editorial" element={<Editorialpage />} />
                    <Route path="important-dates" element={<Keydatepage />} />
                    <Route path="/paper-submission" element={<Papersubpage />} />
                    <Route path="/register" element={<Registerpage />} />
                    <Route path="/contact" element={<Contactpage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}