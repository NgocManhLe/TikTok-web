import Header from '~/pages/Trangdn/Header';
import Home from '~/pages/Trangdn/Home';
import SIgn_img from '~/pages/Trangdn/SIgn_img';

function Dangky({ children }) {
    return (
        <div>
            <Header />
            <Home />
            <SIgn_img />

            {/* <div className="container">
                <div className="content">{children} áhfạ</div>
            </div> */}
        </div>
    );
}

export default Dangky;
