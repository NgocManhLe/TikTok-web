import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const css = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = css('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

// MenuItem.propTypes = {
//     data: PropTypes.object.isRequired,
//     onClick: PropTypes.func,
// };

export default MenuItem;
