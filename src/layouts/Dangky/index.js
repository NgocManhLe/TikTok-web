import Header from '~/pages/Trangdn/Header';
import Home from '~/pages/Trangdn/Home';
import Details from '~/pages/Trangdn/Details';
import Error from '~/pages/Trangdn/Errror';
import Login from '~/pages/Trangdn/Login';
import SIgn_img from '~/pages/Trangdn/SIgn_img';

function Dangky({ children }) {
    return (
        <div>
            <Header />
            <Home />
            {/* <Details /> */}
            {/* <Error /> */}
            {/* <Login /> */}
            <SIgn_img />

            {/* <div className="container">
                <div className="content">{children} áhfạ</div>
            </div> */}
        </div>
    );
}

export default Dangky;
