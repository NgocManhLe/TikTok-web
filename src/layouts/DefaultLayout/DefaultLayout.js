import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';

const css = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={css('wrapper')}>
            <Header />
            <div className={css('container')}>
                <Sidebar />
                <div className={css('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
