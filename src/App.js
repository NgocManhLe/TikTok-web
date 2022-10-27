import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts';
import { useEffect, useState } from 'react';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './components/GlobalStyles/GlobalStyles.scss';
import Login from './pages/Login';

function App() {
    // scroll top
    const [btnScrollTopShow, setBtnScrollTopShow] = useState(false);
    const [prevOffset, setPreOffset] = useState(0);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const checkOffset = () => window.pageYOffset;

    useEffect(() => {
        const listenScroll = () => {
            // console.log(checkOffset(), prevOffset);

            if (checkOffset() < prevOffset) setBtnScrollTopShow(true);

            if (checkOffset() === 0) setBtnScrollTopShow(false);
            setPreOffset(checkOffset());
        };

        document.addEventListener('scroll', listenScroll);

        return () => {
            document.removeEventListener('scroll', listenScroll);
        };
    }, [prevOffset]);

    return (
        <Router>
            <div className="App">
                <Login />
                <button className={`btn-scroll-to-top ${btnScrollTopShow ? '' : 'hidden'}`} onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowAltCircleUp} />
                </button>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
