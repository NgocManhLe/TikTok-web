import Header from '~/layouts/components/Trangdn/Header';
import Home from '~/layouts/components/Trangdn/Home';
import Details from '~/layouts/components/Trangdn/Details';
import Error from '~/layouts/components/Trangdn/Errror';
import Login from '~/layouts/components/Trangdn/Login';
import SIgn_img from '~/layouts/components/Trangdn/SIgn_img';

function Dangnhap({ children }) {
    return (
        <div>
            <Header />
            <Home />
            <Details />
            <Error />
            <Login />
            <SIgn_img />
            {/* <div className="container">
                <div className="content">{children} áhfạ</div>
            </div> */}
        </div>
    );
}

export default Dangnhap;
