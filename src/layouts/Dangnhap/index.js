import Header from '~/pages/Trangdn/Header';
import Login from '~/pages/Trangdn/Login';
import SIgn_img from '~/pages/Trangdn/SIgn_img';

function Dangnhap({ children }) {
    return (
        <div>
            <Header />
            <Login />
            <SIgn_img />

            {/* <div className="container">
                <div className="content">{children} áhfạ</div>
            </div> */}
        </div>
    );
}

export default Dangnhap;
